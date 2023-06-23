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


        // const notaMedia = `SELECT AVG(mark) FROM marks
        //                     WHERE subject_id = 100`

        // const [result, data]  = await connection.execute(notaMedia);
        // console.log(result)



        // const totalAlumnos = `SELECT COUNT(*) FROM students`

        // const [result1, data1]  = await connection.execute(totalAlumnos);
        // console.log(result1)



        // const listaCourses = `SELECT * FROM courses`

        // const [result2, data2]  = await connection.execute(listaCourses);
        // console.log(result2)


        // const eliminarNotas = `DELETE FROM marks
        //                         WHERE mark > 5 AND date > '2022-01-01' 
        //                         AND date < '2023-01-01'`
            
        // const [result3, data3]  = await connection.execute(eliminarNotas);
        // console.log(result3)


        // const createTable = `ALTER TABLE school.students ADD COLUMN
        //                     year_of_entry VARCHAR(45) NULL AFTER course_id`

        // const [result4, data4]  = await connection.execute(createTable);
        // console.log(result4)


        // const curso2023 = `SELECT students_id, first_name, 
        //                     last_name, course_id FROM students
        //                     WHERE year_of_entry = 2023`

        // const [result5, data5]  = await connection.execute(curso2023);
        // console.log(result5)   
        


        // const calcularProfesores = `SELECT subject_id, COUNT(*) AS
        //                             teacher_id FROM marks GROUP BY
        //                             subject_id`

        // const [result6, data6]  = await connection.execute(calcularProfesores);
        // console.log(result6) 



        ///not ok

        const obtenerID = `SELECT * FROM marks
                            WHERE (students_id BETWEEN 1 AND 20)
                            OR (mark > 8 AND date BETWEEN '2022-01-01' 
                            AND '2023-01-01')`;


        const [result7, data7]  = await connection.execute(obtenerID);
        console.log(result7) 


        // const notas = `SELECT subject_id, AVG(mark) FROM marks
        //                 WHERE date BETWEEN '2022-01-01'
        //                 AND '2023-01-01' GROUP BY subject_id`
                        
        // const [result8, data8]  = await connection.execute(notas);
        // console.log(result8) 


        const mediaAritmetica = `SELECT students_id, AVG(mark) 
                                FROM marks
                                WHERE date BETWEEN '2022-01-01'
                                AND '2023-01-01' GROUP BY students_id;`

        const [result9, data9]  = await connection.execute(mediaAritmetica);
        console.log(result9) 

    }
    catch (err){
        console.log(err)
        await connection.end();
    }
}

connect();
