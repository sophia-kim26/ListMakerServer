const db = require("./db_connection");

/**** Drop existing tables, if any ****/

const drop_assignments_table_sql = "DROP TABLE IF EXISTS assignments;"

db.execute(drop_assignments_table_sql);

const drop_subjects_table_sql = "DROP TABLE IF EXISTS subjects;"

db.execute(drop_subjects_table_sql);

