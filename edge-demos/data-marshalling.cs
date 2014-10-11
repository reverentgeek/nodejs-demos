using System.Collections.Generic;
async (input) =>
{
    Console.WriteLine("");
    Console.WriteLine("Data from Node.js to .NET :");
    Console.WriteLine("===========================");
    var data = (IDictionary<string, object>) input;
    foreach (var kv in data)
    {
        Console.Write("{0} ({1})", kv.Key, kv.Value.GetType());
        if (kv.Value is System.Dynamic.ExpandoObject) {
            var values = kv.Value as IDictionary<string, object>;
            if (values != null) {
                Console.WriteLine(", Values:");
                foreach(var kv2 in values) {
                    Console.WriteLine("   - {0} ({1}): {2}", kv2.Key, kv2.Value.GetType(), kv2.Value);                    
                }
            } else {
                Console.WriteLine(": dynamic");
            }
        }
        else if (kv.Value is System.Object[]) {
            var values = kv.Value as System.Object[];
            Console.WriteLine(", Values: ");
            for(var i = 0; i < values.Length; i++) {
                Console.WriteLine("   - {0}: {1}", values[i].GetType(), values[i]);
            }
        }
        else if (kv.Value is System.Byte[]) {
            var bytes = kv.Value as System.Byte[];
            Console.WriteLine(": byte array size {0:#,###}", bytes.Length);
        }
        else {
            Console.WriteLine(": {0}", kv.Value);
        }
    }
    Console.WriteLine("");

    var result = new {
        anInteger = 1,
        aNumber = 3.1415,
        sString = "String Value",
        aBool = true,
        anObject = new { a = "1", b = "2" },
        anArray = new int[] { 1, 2, 3 },
        aBuffer = new byte[1024]
    };

    return result;
}
