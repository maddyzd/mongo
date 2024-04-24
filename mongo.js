const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const connStr= "mongodb+srv://mdumon:mydb123@cluster0.rvujnyd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const app = express();

app.get('/', (req, res) => {
  MongoClient.connect(connStr, function(err, db) {
    if (err) {
      console.log(err);
      res.send('Error connecting to database');
    } else {
      var dbo = db.db("Stock");
      var collection = dbo.collection('PublicCompanies');
      console.log("Success!");
      db.close();
      res.send('Database connection successful!');
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

