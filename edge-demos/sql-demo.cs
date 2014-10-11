//#r "System.dll"
//#r "System.Data.dll"

using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Dynamic;
using System.Threading.Tasks;

public class Startup
{
    public async Task<object> Invoke(IDictionary<string, object> input)
    {
        var query = @"
DECLARE @RowStart int, @RowEnd int;
SET @RowStart = (@currentPage - 1) * @pageSize + 1;
SET @RowEnd = @currentPage * @pageSize;

WITH Paging AS
(
SELECT  ROW_NUMBER() OVER (ORDER BY CreateDate DESC) AS RowNum,
        Id, FirstName, LastName, Email, CreateDate
FROM    SampleUsers
)
SELECT  Id, FirstName, LastName, Email, CreateDate
FROM    Paging
WHERE   RowNum BETWEEN @RowStart AND @RowEnd
ORDER BY RowNum;
";
        // This runs the query using the CLR thread pool
        var queryTask = Task<object>.Factory.StartNew (() => ExecuteQuery (query, input));
        return await queryTask;
    }

    public object ExecuteQuery(string query, IDictionary<string, object> parameters)
    {
        var connectionString = Environment.GetEnvironmentVariable("EDGE_SQL_CONNECTION_STRING");
        var rows = new List<object>();

        using (var connection = new SqlConnection(connectionString))
        {
            using (var command = new SqlCommand(query, connection))
            {
                if (parameters != null) {
                    foreach (KeyValuePair<string, object> parameter in parameters) {
                        command.Parameters.AddWithValue (parameter.Key, parameter.Value);
                    }
                }
                connection.Open();
                using (SqlDataReader reader = command.ExecuteReader(CommandBehavior.CloseConnection))
                {
                    var record = (IDataRecord)reader;
                    while (reader.Read())
                    {
                        var dataObject = new ExpandoObject() as IDictionary<string, Object>;
                        var resultRecord = new object[record.FieldCount];
                        record.GetValues(resultRecord);

                        for (int i = 0; i < record.FieldCount; i++)
                        {
                            var type = record.GetFieldType(i);
                            if (type == typeof(byte[]) || type == typeof(char[]))
                            {
                                resultRecord[i] = Convert.ToBase64String((byte[])resultRecord[i]);
                            }
                            else if (type == typeof(Guid) || type == typeof(DateTime))
                            {
                                resultRecord[i] = resultRecord[i].ToString();
                            }
                            else if (type == typeof(IDataReader))
                            {
                                resultRecord[i] = "<IDataReader>";
                            }

                            dataObject.Add(record.GetName(i), resultRecord[i]);
                        }
                        rows.Add(dataObject);
                    }
                }
            }
        }

        return rows;
    }
}

