module.exports = {
    port: 8081, 
    db:{
        database: process.env.DB_Name || 'tabtracker',
        user: process.env.DB_USER || 'tabtracker',
        password: process.env.DB_PASS || 'tabtracker',
        options: {
            dialect: process.env.DIALECT || 'sqlite', 
            host: process.env.HOST || 'localhost',
            storage: './tabtracker.sqlite'
        }
    }
}
