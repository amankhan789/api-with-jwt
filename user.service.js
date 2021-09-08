const pool=require("../../config/database");
const { getUsersByUserId } = require("./user.controller");


module.exports={
    create:(data,callBack)=>{
        pool.query(`insert into registartion(name,email,password,number,location)
          value(?,?,?,?,?)`,
          [
              data.name,
              data.email,
              data.password,
              data.number,
              data.location,
          ],
          (error,result, field)=>{
            if(error){
                 return callBack(error);

            }
              return callBack(null,result);
          }

          );
    },
    getUsers: callBack =>{
  pool.query(
    `select id , name,email,password,number,location from registartion`,
    [],
    (error,result,fields)=>{
      if(error){
         return callBack(error);
      }
      return callBack(null,results)
    }
  );
    },
    getUsersBYUserId: (id, callBack) =>{
      pool.query(
        `select id , name,email,password,number,location from registartion where id=?`,
        [id],
        (error,result,fields)=>{
          if(error){
             return callBack(error);
          }
          return callBack(null,result[0]);
        }
      );
        },
        updateUser:(data,callBack)=>{
          pool.query(
    `update registartion set name=?,email=?,password=?,number=?,location=? where id =?`),    
            [
                data.name,
                data.email,
                data.password,
                data.number,
                data.location,
                data.id
            ],
            (error,result, field)=>{
              if(error){
                   return callBack(error);
 
              }
                return callBack(null,results);
            }
 
                  },
       
          deleteUser:(data, callBack)=>{
            pool.query(
              `delete from registartion where id = ?`,
              [data.id],
              (error, result,fields)=>{
               if(error){
                  return callBack(error);
               }
               return callBack(null, results[0]);
              }
            );

           
          },
          getUsersByUserEmail:(email,callBack)=>{
            pool.query(
              `select * from registartion where email =?`,
              [email],
              (error,result,fields)=>{
                if (error){
                  callBack(error);
                }
                return callBack(null, result[0]);
              }
            );
          }
        };
 
