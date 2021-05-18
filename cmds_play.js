const {User, Quiz} = require("./model.js").models;


const options = { logging: false};
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize("sqlite:db.sqlite", options);

// Show all users in DB
exports.inicio_juego = async (rl) => {
   this.quiz_realizadas={};
   this.quizzes = await Quiz.findAll({order: [sequelize.random()] });

   let tot_quizzes =await Quiz.count();
   console.log( ` total quizzes dados alta : `+tot_quizzes);

   let tot_correctas =0;
    console.log(`total quizzes correctas: `+ tot_correctas );
  

  this.quizzes.forEach( 
         q =>  {
            rl.log(`  "${q.question}"  id=${q.id}`);
          /*  this.quiz_realizadas.push(`q`) ;
            this.quiz_realizadas.forEach( 
               qr => {
                  r1.log(`  "${qr.question}" ?  , id=${qr.id}`)
               }); */
             
           
         
         }
    );

    this.quizzes.forEach( 
      q => {
          // rl.log(`  "${q.question} ? " , id=${q.id}`);
        
          //Hacemos la pregunta para que introduzca la respuesta
        let answered =  await  rl.questionP(q.question);

         if (answered.toLowerCase().trim()===q.answer.toLowerCase().trim()) {
            rl.log(`  The answer "${answered}" is right!`);
            tot_correctas++;
          } else {
            rl.log(`  The answer "${answered}" is wrong!`);
          };

      } 
    );

   }
   
