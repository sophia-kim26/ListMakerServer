const db = require("./db_connection");

/**** Drop existing tables, if any ****/

const drop_type_table_sql = "DROP TABLE IF EXISTS type;"

db.execute(drop_type_table_sql);

const drop_item_table_sql = "DROP TABLE IF EXISTS item;"

db.execute(drop_item_table_sql);

const create_type_table_sql = `
    CREATE TABLE type (
        type_id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(45) NOT NULL,
        PRIMARY KEY (type_id));
`
db.execute(create_type_table_sql);

const create_item_table_sql = `
    CREATE TABLE item (
        item_id INT NOT NULL AUTO_INCREMENT,
        author VARCHAR(45) NULL,
        desc VARCHAR(150) NULL,
        name VARCHAR(150) NULL,
        PRIMARY KEY (item_id),
        FOREIGN KEY (type_id)
        REFERENCES type (type_id);
`
db.execute(create_item_table_sql);


db.end();