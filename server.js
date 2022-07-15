const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const passport = require("passport");
require("dotenv").config();

//Express Session Section
const expressSession = require("express-session")({
  secret: "secret",
  resave: false,
  saveUninitialized: false,
});

// Routing Section
const managerListRoute = require("./routes/managerListRoute");
const ProductsRoutes = require("./routes/ProductsRoutes");

const registerroutes = require("./routes/registerroutes");
const loginRoutes = require("./routes/loginRoutes");
const salesRoutes = require("./routes/salesRoutes");
const managerRoutes = require("./routes/managerRoutes");
const directorRoutes = require("./routes/directorRoutes");

// Database
const config = require("./config/database");

// Models Section
const Manager = require("./models/Manager");

//instatiating the express server
const server = express();

//Setup Mongoose
//connect mongoose with db
mongoose.connect(config.database, { useNewUrlParser: true });
const db = mongoose.connection;

//Checking for the connection of MongoDb
db.once("open", function () {
  console.log("Connected to MongoDB");
});

// Checking for any db errors on connection
db.on("error", function (err) {
  console.error(err);
});

// views settings or configurations
server.set("view engine", "pug");
server.set("views", "./views");

//Below we configure the middle-ware - 'express.urlencoded({extended: true})' is responsible for parsing(/screening) form data into the node server.
server.use(express.static(path.join(__dirname, "public")));
server.use(express.urlencoded({ extended: true }));
server.use(expressSession);

server.use(passport.initialize());
server.use(passport.session());

passport.use(Manager.createStrategy());
passport.serializeUser(Manager.serializeUser());
passport.deserializeUser(Manager.deserializeUser());

//creating a login checker
// const loginchecker = function(req,res,next) {
//   if(req.path!='/login' && req.path != '/register' && !req.session.user){
//     res.redirect('/register')
//   }
//   next()
// }
// server.use(loginchecker)

server.use("/register", registerroutes);
server.use("/login", loginRoutes);
server.use("/", loginRoutes);
server.use("/sales", salesRoutes);
server.use("/manager", managerRoutes);
server.use("/director", directorRoutes);

server.use("/managers", managerListRoute);
server.use("/product", ProductsRoutes);
server.use("/productList", ProductsRoutes);

// handling non existing routes
server.get("*", (req, res) => {
  res.status(404).send("OOPS! WRONG ADDRESS");
});

// server
server.listen(3005, () => console.log("Listening on Port 3005"));
