console.log("HELLO");

const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');


const app = express();


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'AgOps',
  // username: true,
});
connection.connect((err) => {
  if (err) throw err;
  console.log('MYSQL Connected!');
});



app.listen(3000, () => console.log('listening at 3000') );

app.use(express.static('public'))
app.use(express.json());

app.post('/api', (request, response) => {
	// console.log( request.body );
	// console.log( request.body );
	response.json({ status: 'SUCCESS' });
});

// *************************************
// Need to be removed as they are not being used
app.get('/api', (request, response) => {
  connection.query('SELECT * FROM product', (err,rows) => {
    if(err){
      response.end();
      return;
    }
    response.json( rows );
    console.log('Data sent');
  });
});

app.get('/agricultural_preserves', (request, response) => {
  connection.query('select * FROM `agricultural_preserves`', (err,rows) => {
    if(err){
      response.end();
      return;
    }
    response.json( rows );
    console.log('.get(agricultural_preserves) agricultural_preserves Data sent');
  });
});


// *************************************
// Actively being used APIs

// Not being used (may need to delete)
app.post('/GetPlotInfo', (request, response) => {
  console.log(".post(GetPlotInfo)");
  var request_body = request.body;
  var query_str = 'select * FROM `agricultural_preserves` WHERE OBJECTID=' + request_body["OBJECTID"]
  console.log( query_str );
  // var query_str = 'select * FROM `app_record` WHERE Location=' +
  connection.query(query_str, (err,rows) => {
    if(err){
      response.end();
      return;
    }
    response.json( rows );
    // console.log( rows );
    console.log('Data sent: .post(GetPlotInfo) agricultural_preserves');
  });
});

//query now returns all object where day completed is empty
app.post('/GetAppPlotInfo', (request, response) => {
  var request_body = request.body;
  console.log(request_body);
  // var query_str = 'select * FROM `app_record` WHERE Location=' + request_body["OBJECTID"]

  var query_str = 'select * FROM `app` WHERE fieldid=' + request_body["OBJECTID"] + " AND `Day Completed` IS NULL;";
  // console.log( query_str );
  // var query_str = 'select * FROM `app_record` WHERE Location=' +
  connection.query(query_str, (err,rows) => {
    if(err){
      console.log(".post(GetAppPlotInfo) failed");
      console.log(err.message);
      console.log(query_str);
      response.end();
      return;
    }
    // console.log( rows );
    // console.log(query_str);
    console.log('.post(GetAppPlotInfo) Data sent');
    response.json( rows );
  });
});


//query now returns all object where day completed is empty
app.post('/GetRecentPlotInfo', (request, response) => {
  var request_body = request.body;
  console.log(request_body);
  // var query_str = 'select * FROM `app_record` WHERE Location=' + request_body["OBJECTID"]

  var query_str = 'select * FROM `app` WHERE fieldid=' + request_body["OBJECTID"] + " AND `Day Completed` > DATE_SUB(NOW(), INTERVAL 7 DAY);";
  // console.log( query_str );
  // var query_str = 'select * FROM `app_record` WHERE Location=' +
  connection.query(query_str, (err,rows) => {
    if(err){
      console.log(".post(GetAppPlotInfo) failed");
      console.log(err.message);
      console.log(query_str);
      response.end();
      return;
    }
    // console.log( rows );
    // console.log(query_str);
    console.log('.post(GetAppPlotInfo) Data sent');
    response.json( rows );
  });
});


app.get('/GetAllProducts', (request, response) => {
  connection.query('select * FROM `products`', (err,rows) => {
    if(err){
      response.end();
      return;
    }
    response.json( rows );
    console.log('.get(GetAllProducts) Data sent');
  });
});


app.get('/GetAllPeronnel', (request, response) => {
  connection.query('select * FROM `personnel`', (err,rows) => {
    if(err){
      response.end();
      return;
    }
    response.json( rows );
    console.log('.get(GetAllPeronnel) Data sent');
  });
});

// *************************************

app.post('/SubmitOrder', (request, response) => {
  var request_body = request.body;
  console.log(request_body["field_name"]);

  const field_name = request_body["field_name"];
  const pest_select = request_body["pest_select"].split(",")[0];
  const rate_field = request_body["rate_field"];
  const rei_field = request_body["rei_field"];
  const phi_field = request_body["phi_field"];
  const equip_field = request_body["equip_field"];
  const tech_field = request_body["tech_field"];
  const datetime = request_body["datetime"];

  const query =  "INSERT INTO `app` (fieldid, Pesticide, Rate, REI, PHI, Equipment, Technician, `Day Scheduled`) VALUE ("
  +"\""+field_name+"\""+", "
  +"\""+pest_select+"\""+", "
  +"\""+rate_field+"\""+", "
  +"\""+rei_field+"\""+", "
  +"\""+phi_field+"\""+", "
  +"\""+equip_field+"\""+", "
  +"\""+tech_field+"\""+", "
  +"\""+datetime+"\""+") ;";






  connection.query(query, (err,rows) => {
    if(err){
      console.log(".post(SubmitOrder) failed");
      console.log(err.message);
      console.log(query);
      response.end();
      return;
    }
    // response.json( rows );
    // console.log( rows );
    console.log(".post(SubmitOrder) Data entered");
    response.json({ status: 'SUCCESS' });
  });

});


//
app.post('/SubmitDoc', (request, response) => {
  var request_body = request.body;
  console.log(request_body["field_name"]);

  const field_name = request_body["field_name"];
  const pest_select = request_body["pest_select"].split(",")[0];
  const rate_field = request_body["rate_field"];
  const rei_field = request_body["rei_field"];
  const phi_field = request_body["phi_field"];
  const equip_field = request_body["equip_field"];
  const tech_field = request_body["tech_field"];
  const day_completed = request_body["datetime"];

  connection.query("SET SQL_SAFE_UPDATES = 0;");
  const query =  "UPDATE app SET `Day Completed` = \"" + day_completed + "\" WHERE fieldid = " + field_name + ";";

  connection.query(query, (err,rows) => {
    if(err){
      console.log(".post(SubmitDoc) failed");
      console.log(err.message);
      console.log(query);
      response.end();
      return;
    }
    // response.json( rows );
    // console.log( rows );
    console.log(".post(SubmitDoc) Data entered");
    response.json({ status: 'SUCCESS' });
  });

  connection.query("SET SQL_SAFE_UPDATES = 1;");

});
