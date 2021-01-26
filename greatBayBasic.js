var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "greatBaySchema"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

// function which prompts the user for what action they should take
function start() {
  inquirer
    .prompt({
      name: "postOrBid",
      type: "rawlist",
      message: "Would you like to [POST] an auction or [BID] on an auction?",
      choices: ["POST", "BID"]
    })
    .then(function(answer) {
      // based on their answer, either call the bid or the post functions
      if (answer.postOrBid.toUpperCase() === "POST") {
        postAuction();
      }
      else {
        bidAuction();
      }
    });
}
//Define function for postAuction and bidAuction.

//postAuction = item_name, category, starting_bid



//bidAuction = list of item_name, select from list, then console asks what they want to bid.
//if bid >= starting_bid, update values in table. If not, console log bid too low and boot to selection screen.
