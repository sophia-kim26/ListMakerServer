const db = require("./db_connection");

/**** Delete *CONTENTS OF* existing tables (but not dropping tables themselves) ****/

const delete_type_table_sql = "DELETE FROM type;"

db.execute(delete_type_table_sql);

const delete_item_table_sql = "DELETE FROM item;"

db.execute(delete_item_table_sql);