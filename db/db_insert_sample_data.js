const db = require("./db_connection");

/**** Delete *CONTENTS OF* existing tables (but not dropping tables themselves) ****/

const delete_type_table_sql = "DELETE FROM type;"

db.execute(delete_type_table_sql);

const delete_item_table_sql = "DELETE FROM item;"

db.execute(delete_item_table_sql);

/**** Create some sample subjects and assignments ****/

const insert_subject_sql = `
    INSERT INTO subjects 
        (subjectId, subjectName) 
    VALUES 
        (?, ?);
`

db.execute(insert_subject_sql, [1, 'Comp Sci']);

db.execute(insert_subject_sql, [2, 'Math']);

db.execute(insert_subject_sql, [3, 'Language']);

db.execute(insert_subject_sql, [4, 'Music']);


const insert_assignment_sql = `
    INSERT INTO assignments 
        (title, priority, subjectId, dueDate, description) 
    VALUES 
        (?, ?, ?, ?, ? );
`

//subjectId: 2 => 'Math'
db.execute(insert_assignment_sql, ['Textbook Exercises', 10, 2, '2023-05-26', 
        'Do odd questions in the range #155 - #207 (chapter 11). Remember to show your work!']);

//subjectId: 3 => 'Language'
db.execute(insert_assignment_sql, ['Long Form Essay', 8, 3, '2023-06-01', null]);

//subjectId: 1 => 'Comp Sci'
db.execute(insert_assignment_sql, ['Web App Project', 5, 1, '2023-06-07', null]);

db.end();