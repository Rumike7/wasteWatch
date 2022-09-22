const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose');

const app = express();
app.use(express.json());
// let port = process.env.PORT || 4000;

let port = 4000;
// Mongodb
app.use(express.json());
// app.set('view engine', 'ejs');
const NAME_DB='mydb';
// const NAME_DB='wasteWatch';
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/"+NAME_DB;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});


// Routes Category
const DB_CAT='categories';
app.post('/api', async (req, res,next) => {
  console.log("POST category5");

});
app.get('/api', async (req, res,next) => {
  console.log("POST category4");

});
app.post('/', async (req, res,next) => {
  console.log("POST category3");

});
app.get('/', async (req, res,next) => {
  console.log("POST category2");

});
app.post('/api/category', async (req, res,next) => {
  console.log("POST category");
  try{
    const category=req.body.category;
    await saveCategory(category);
    res.send(category);
  }catch(err){
    next(err);
  }
});
app.put('/api/category', async (req, res,next) => {
  try{
    console.log(req.body);
    const category=req.body.category;
    const newCategory=req.body.newCategory;
    await editCategory(category,newCategory);
    res.send(newCategory);
  }catch(err){
    next(err);
  }
});
app.get('/api/category', async (req, res,next) => {
  try{
    const categories=await getCategories();
    console.log(categories);
    res.send(categories);
  }catch(err){
    next(err);
  }
});

async function saveCategory(category) {
  var url = "mongodb://localhost:27017/";
  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db(NAME_DB);
  dbo.listCollections({name: DB_CAT})
    .next(function(err, collinfo) {
        if (!collinfo) {
            dbo.createCollection(DB_CAT, function(err, res) {
              if (err) throw err;
              console.log("Collection created!");
              db.close();
          });
        }
    });
  dbo.collection(DB_CAT).insertOne(category, function(err, res) {
    if (err) throw err;
    console.log(category);
    console.log("1 document inserted");
    db.close();
    });
  });
}
async function editCategory(category,newCategory) {
  var url = "mongodb://localhost:27017/";
  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db(NAME_DB);
  newCategory={
    "title":newCategory.title,
    "sum":newCategory.sum,
    "final":newCategory.final,
    "subs":newCategory.subs
  };
  dbo.collection(DB_CAT).updateOne({'title':category.title},{$set:newCategory}, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
    });
  });
}

async function getCategories(){
  const url = 'mongodb://localhost:27017';
  const client = await MongoClient.connect(url, { useNewUrlParser: true })
  .catch(err => { console.log(err); });

  if (!client) {
    return;
  }
  try {

    const db = client.db(NAME_DB);
    let collection = db.collection(DB_CAT);
    let res = await collection.find({}).toArray();
    return res;
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }
}

const server = app.listen(port,function(){
  console.log('Listening on port ' + port);
});
