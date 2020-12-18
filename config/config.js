module.exports= {
    "development": {
      username: process.env.myusername,
      password: process.env.password,
      database: process.env.database,
      host: process.env.host,
      dialect: 'mysql',    
    },
    "test": {
      "username": process.env.myusername,
      "password": process.env.password,
      "database": process.env.databasetest,
      "host": process.env.host,
      "dialect": 'mysql',      
    },
    "production": {
      "use_env_variable": "JAWSDB_URL",
      "dialect": 'mysql',    
    }  
}