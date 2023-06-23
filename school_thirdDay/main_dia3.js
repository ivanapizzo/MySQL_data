const mysql = require("mysql2/promise");

const connect = async () => {

    try{
        const connection = await mysql.createConnection({

            host       : "localhost",
            user       : "root",
            password   : "bocajuniors12I!",
            database   : "school",  
        });
        console.log("conexión correcta")


        // model :
        // FROM students JOIN courses ON 
       // (students.course_id = courses. course_id) 
       //  JOIN subject_teacher ON ( courses.course_id = subject_teacher.course_id) 



        // const studentsAndSubjects = `SELECT first_name, last_name, 
        //                             title FROM students INNER JOIN courses ON
        //                             (students.course_id = courses.course_id) 
        //                             INNER JOIN subject_teacher ON
        //                             (courses.course_id = subject_teacher.course_id)
        //                             INNER JOIN subjects ON (subject_teacher.subject_id = subjects.subject_id) `

        // const [result, data]  = await connection.execute(studentsAndSubjects);
        // console.log(result) 



        // const teacherAndSubject = `SELECT first_name, last_name, 
        //                             title FROM teachers INNER JOIN subject_teacher ON
        //                             (teachers.teacher_id = subject_teacher.teacher_id)
        //                             INNER JOIN subjects ON (subject_teacher.subject_id = 
        //                             subjects.subject_id)`
        
        // const [result1, data1]  = await connection.execute(teacherAndSubject);
        // console.log(result1) 


        const studentsSubjectsTeachers = `SELECT COUNT(*) AS students_id, title AS subjects,
                                            teachers.first_name, teachers.last_name 
                                            FROM subjects
                                            JOIN subject_teacher ON (subjects.subject_id =
                                            subject_teacher.subject_id)
                                            JOIN teachers ON (subject_teacher.teacher_id =
                                            teachers.teacher_id)
                                            JOIN courses ON (teachers.teacher_id = subject_teacher.course_id)
                                            JOIN students ON (subject_teacher.course_id = 
                                            students.students_id)
                                            GROUP BY subjects.title, teachers.first_name, teachers.last_name`

        const [result2, data2]  = await connection.execute(studentsSubjectsTeachers);
        console.log(result2)   


    }
    catch (err){
        console.log(err)
        await connection.end();
    }
}

connect();