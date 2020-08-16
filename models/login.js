var db = require('./dbc');

module.exports =
{
	login: function(user, callback)
  	{
		var sql = "SELECT * FROM `login` WHERE username='"+user.username+"' AND password='"+user.password+"';";
		db.getResults(sql, function(result)
    	{
			if(result.length > 0)
			{
				callback(result);
			}
			else
			{
				callback([]);
			}
		});
	},
	addEmp: function(user,callback)
	{
		var sql="INSERT INTO `login` (`username`,`password`,`name`,`phone`,`status`) VALUES ('"+user.username+"','"+user.password+"','"+user.name+"','"+user.phone+"','2');";
		db.execute(sql,function(result){
			if(result)
			{
				callback(true);
			}
			else
			{
				callback(false);
			}
		})                                                   
	},
	addproduct: function(user,callback)
	{
		var sql="INSERT INTO `product` (`name`,`quantity`,`price`) VALUES ('"+user.name+"','"+user.quantity+"','"+user.price+"');";
		db.execute(sql,function(result){
			if(result)
			{
				callback(true);
			}
			else
			{
				callback(false);
			}
		})                                                   
	},
	getEmp : function(callback)
	{
		var sql ="SELECT * FROM `login` WHERE `status`='2';";
		db.getResults(sql, function(result)
    	{
			if(result.length > 0)
			{
				callback(result);
			}
			else
			{
				callback([]);
			}
		});
	},
	getproduct : function(callback)
	{
		var sql ="SELECT * FROM `product`;";
		db.getResults(sql, function(result)
    	{
			if(result.length > 0)
			{
				callback(result);
			}
			else
			{
				callback([]);
			}
		});
	},
	get: function(user,callback)
	{
		var sql ="SELECT * FROM `login` WHERE `username`='"+user.username+"';";
		db.getResults(sql, function(result)
    	{
			if(result.length > 0)
			{
				callback(result);
			}
			else
			{
				callback([]);
			}
		});
	},
	update : function(user,callback)
	{
		var sql = "UPDATE `login` SET `password`='"+user.password+"' , `name`='"+user.name+"',`phone`='"+user.phone+"' WHERE `username`='"+user.username+"';";	
		db.execute(sql,function(result)
		{
			if(result)
			{
				callback(true);
			}
			else
			{
				callback(false);
			}
		});
	
	},
	remove: function(user, callback)
  	{
		var sql = "DELETE FROM `login` WHERE `username`='"+user+"';";
		db.execute(sql, function(result)
    	{
			if(result)
			{
				callback(true);
			}
			else
			{
				callback(false);
			}
		});
	}
}