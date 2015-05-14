var users = function(config) {
	var getUserById = function(id) {
		// Look up user in database by id
		return { 
			id: id,
			firstName: "David",
			lastName: "Neal",
			emailAddress: "david@reverentgeek.com"
		};
	};
	
	return {
		getUserById: getUserById
	};
};

module.exports = users;