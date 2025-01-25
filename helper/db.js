import mysql from "mysql2";
import app from "./app.js";

// Use .env file for variables
import dotenv from "dotenv";
dotenv.config();

// Database connection pool
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise();

// Setup session and cookie middleware as well as session storage
import session from "express-session";
import expressMySQL from "express-mysql-session";

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

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true, // Set to false when done with testing
    store: sessionStore,
    cookie: {
        secure: false, // Set to true when using https
        // httpOnly: true, // Cookie can only be accessed by HTTP requests
        maxAge: 600000 // 10 minutes
    }
}));

async function createTables() {
    /*
    // Create Session Table
    try {
        await pool.query(`CREATE TABLE IF NOT EXISTS sessions(
    session_id varchar(128) COLLATE utf8mb4_bin NOT NULL,
    expires int(11) unsigned NOT NULL,
    data mediumtext COLLATE utf8mb4_bin,
    PRIMARY KEY (session_id)
    ) ENGINE=InnoDB`);
        console.log("Session table created");
    } catch (error) {
        console.error("Error creating session table:", error);
    }
    */

    // Create User table
    try {
        await pool.query(`
        CREATE TABLE IF NOT EXISTS user(
            username VARCHAR(25) NOT NULL,
            password VARCHAR(50) NOT NULL,
            email VARCHAR(50) PRIMARY KEY
        )
        `);
        console.log("User table created");
    } catch (error) {
        console.error("Error creating user table:", error);
    }

    // Create Project table
    try {
        await pool.query(`
        CREATE TABLE IF NOT EXISTS project(
            name VARCHAR(50) NOT NULL,
            description VARCHAR(50),
            startdate DATE,
            enddate DATE,
            user_email VARCHAR(50),
            FOREIGN KEY (user_email) REFERENCES user(email)
        )
        `);
        console.log("Project table created");
    } catch (error) {
        console.error("Error creating user table:", error);
    }

    // Create Admin table
    try {
        await pool.query(`
        CREATE TABLE IF NOT EXISTS admin(
            user_email VARCHAR(50),
            FOREIGN KEY (user_email) REFERENCES user(email)
        )
        `);
        console.log("Admin table created");
    } catch (error) {
        console.error("Error creating user table:", error);
    }
}

createTables();

export default pool;