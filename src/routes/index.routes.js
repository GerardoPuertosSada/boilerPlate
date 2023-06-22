const { saludar } = require('../controllers/welcomeControllers')
const server = require('../server')


server.get("/welcome", (req, res) =>{
  try {
    saludar()
    res.status(200).send("GET de prueba a /welcome");
  } catch (error) {
    res.status(500).send("error al conectar o enviar la petición:", error);
    
  }
})

// server.get("/films", (req, res) => {
//   const order = req.query.order;

//   let querySQL = `SELECT * FROM film ORDER BY film_id`;

//   if (order) {
//     querySQL = `SELECT * FROM film ORDER BY film_id ${order}`;
//   }

//   pool.query(querySQL, (error, result) => {
//     if (error) {
//       res.status(500).send("error al conectar o enviar la petición:", error);
//     } else {
//       res.status(200).json(result.rows);
//     }
//   });
// });

// server.get("/films/:id", (req, res) => {
//   const film_id = parseInt(req.params.id);

//   let querySQL = `SELECT * FROM film WHERE film_id = ${film_id}`;

//   pool.query(querySQL, (error, result) => {
//     if (error) {
//       res.status(500).send("error al conectar o enviar la petición:", error);
//     } else {
//       res.status(200).json(result.rows);
//     }
//   });
// });


// // server.delete("/films/:id", (req,res)=>{

// //     const film_id = parseInt(req.params.id);

// //     let querySQL = `DELETE FROM film WHERE film_id = ${film_id}`;
  
// //     pool.query(querySQL, (error, result) => {
// //       if (error) {
// //         res.status(500).send(error);
// //       } else {
// //         res.status(200).json(result);
// //       }
// //     });


// // })