import session from "express-session";
import expressMySQL from "express-mysql-session";
import mysql from "mysql2";
import app from "./app.js";

// Setup session and cookie middleware as well as session storage
const MySQLStore = expressMySQL(session);
const options = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
};

const sessionConnection = mysql.createConnection(options);
const sessionStore = new MySQLStore({
    expiration: 10800000,
    createDatabaseTable: true,
    schema: {
        tableName: 'sessions',
        columnNames: {
            session_id: 'session_id',
            expires: 'expires',
            data: 'data'
        }
    }
}, sessionConnection)

// Create session
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false, // Set to false when done with testing
    store: sessionStore,
    cookie: {
        secure: false, // Set to true after testing
        sameSite: "lax",
        // httpOnly: true, // Cookie can only be accessed by HTTP requests
        maxAge: 600000 // 10 minutes
    }
}));