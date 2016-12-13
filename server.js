var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var firebase = require('firebase');

var db = firebase.initializeApp({
    apiKey: "AIzaSyDtQ_NKVgypWNhreYxl36a0yRMazntsq6c",
    authDomain: "myrecruiter-9d526.firebaseapp.com",
    databaseURL: "https://myrecruiter-9d526.firebaseio.com",
    storageBucket: "myrecruiter-9d526.appspot.com",
    messagingSenderId: "416574837620"
 });
var auth = db.auth();
var dir = __dirname + "/";

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
	console.log("GET /");
	var user = auth.currentUser;
	if (user)
   		res.sendFile(dir+"/index.html");
	else
    {
		console.log("Not logged in");
		res.redirect("/login");
	}
});
app.get('/login', function(req, res) {
	console.log("GET /login");
	var user = auth.currentUser;
	if (user)
		res.redirect("/");
	else
		res.sendFile(dir+"login.html");
});
app.post('/login', function(req, res) {
	console.log("POST /login");
    console.log("Request: "+req.body.username+" "+req.body.password);
    auth.signInWithEmailAndPassword(req.body.username, req.body.password)
        .catch(function () {
            console.log("Error signing in.");
        })
        .then(function () {
            res.redirect("/login");
        });
});
app.get('/signup', function(req, res) {
    console.log("GET /signup");
    var user = auth.currentUser;
    if (user)
    {
        res.redirect("/");
    }
    else
    {
        res.sendFile(dir+"signup.html");
    }
});
app.post('/signup', function(req, res) {
    console.log("POST /signup");
    console.log("Request: "+req.body.username+" "+req.body.password);
    auth.createUserWithEmailAndPassword(req.body.username, req.body.password)
        .catch(function () {
            console.log("Error signing up.");
        })
        .then(function () {
            res.redirect("/signup");
        });
});

app.get('/theme', function(req, res) {
	console.log("GET /theme");
    var user = auth.currentUser;
    if (user)
    {
        res.sendFile(dir+"theme.html");
    }
    else
    {
        console.log("Not logged in");
        res.redirect("/login");
    }
});
app.get('/logout', function(req, res) {
    console.log("GET /logout");
    auth.signOut();
    res.redirect("/");
});

app.listen(3035, function () {
   console.log("Listening at http://localhost:3035");
});