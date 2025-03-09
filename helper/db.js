import mysql from "mysql2";

// Database connection pool
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise();

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
            username VARCHAR(32) UNIQUE NOT NULL,
            password VARCHAR(100) NOT NULL,
            email VARCHAR(100) PRIMARY KEY   
        )
        `);
        console.log("User table created");
    } catch (error) {
        console.error("Error creating User table:", error);
    }

    // Create Board table
    try {
        await pool.query(`
        CREATE TABLE IF NOT EXISTS board(
            title VARCHAR(50) NOT NULL,
            board_order INT NOT NULL,
            board_user VARCHAR(50) NOT NULL,
            FOREIGN KEY (board_user) REFERENCES user(username) ON DELETE CASCADE,
            UNIQUE(board_user, board_order)
        )
        `);
        console.log("Board table created");
    } catch (error) {
        console.error("Error creating Board table:", error);
    }

    // Create Card table
    try {
        await pool.query(`
        CREATE TABLE IF NOT EXISTS card(
            text VARCHAR(700),
            board_title VARCHAR(50) NOT NULL,
            card_order INT NOT NULL,
            card_user VARCHAR(50) NOT NULL,
            tags VARCHAR(280),
            FOREIGN KEY (card_user) REFERENCES board(board_user) ON DELETE CASCADE,
            UNIQUE(card_user, board_name, card_order)
        )
        `);
        console.log("Card table created");
    } catch (error) {
        console.error("Error creating Card table:", error);
    }

    // Create Tag table
    try {
        await pool.query(`
        CREATE TABLE IF NOT EXISTS tag(
            name VARCHAR(20) NOT NULL,
            color VARCHAR(7) NOT NULL,
            tag_user VARCHAR(50) NOT NULL,
            FOREIGN KEY (tag_user) REFERENCES user(username) ON DELETE CASCADE,
            UNIQUE(tag_user, name)
        )
        `);
        console.log("Tag table created");
    } catch (error) {
        console.error("Error creating Tag table:", error);
    }

    // Create Admin table
    /*
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
    */
}

createTables();

export default pool;