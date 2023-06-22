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

        /// todo en direccion    ok


        // const sql = `SELECT * FROM direccion;`

        //     const [result, data]  = await connection.execute(sql);
        //     console.log(result)

        // model:
        // ALTER TABLE `school`.`direccion` 
        // CHANGE COLUMN `numero` `numero` VARCHAR(44) NULL DEFAULT NULL ;




    // insert new column          ok
        // const insertColumn = `ALTER TABLE school.direccion ADD COLUMN barrio VARCHAR(45) NULL AFTER numero`

        //     const [result2, data2] = await connection.execute(insertColumn);
        //     console.log(result2)




    //delete column in direction    ok

        // const deleteColumn = `ALTER TABLE school.direccion DROP COLUMN barrio`

        //     const [result7, data7] = await connection.execute(deleteColumn);
        //     console.log(result7);


    // delete tabla direccion       ok
        // const deleteDirec = `DROP TABLE direccion`

        // const [result3, data3]  = await connection.execute(deleteDirec);
        //     console.log(result3)



    // Setear todas las notas de los alumnos a 0    ok

        // const setear = "UPDATE school.marks SET mark = '0'"
        
        //     const [result4, data4] = await connection.execute(setear);
        //     console.log(result4);



    // name and surname of students     ok  

        // const nameSurname = `SELECT first_name, last_name FROM students`

        //     const [result5, data5] = await connection.execute(nameSurname);
        //     console.log(result5)

    // all of teachers
        
        // const teachers = `SELECT * FROM teachers`   ok

        //     const [result6, data6] = await connection.execute(teachers);
        //     console.log(result6);


    // delete school marks when > 10 years   ok

        const oldDate = `DELETE FROM marks WHERE date < '2013-06-22'` 

            const [result8, data8] = await connection.execute(oldDate);
            console.log(result8);


    // change marks when < 5 = 5    ok

        // const updateMarks = `UPDATE school.marks SET mark = 5 WHERE mark < 5; `

        //     const [result9, data9] = await connection.execute(updateMarks);
        //     console.log(result9);

    }
    catch (err){
        console.log(err)
        await connection.end();
    }
}

connect();