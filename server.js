const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const session = require("express-session");
const expressLayouts = require("express-ejs-layouts");
const methodOverride = require("method-override");
const cors = require("cors");
const path = require("path"); 
const mongoose = require("mongoose");
const sessionValues = require("./config/sesion");
const MongoDBSession = require("connect-mongodb-session")(session);
const MongoURI = "mongodb://localhost:27017/Tasnim_uz";
//  CHvbnXF@M=9- 
mongoose
    .connect(MongoURI, {  
      useNewUrlParser: true, 
      // useCreateIndex: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(() => { 
      console.log(`Mongodb is running`);
    });
  const store = new MongoDBSession({
    uri: MongoURI,
    collection: "MYSession",
  });




  app.use(
    methodOverride("_method", {
      methods: ["POST", "GET"],
    })
  );
  app.locals.moment = require("moment");
  app.use(expressLayouts);
  // app.use(logger("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.set("views", path.join(__dirname, "views"));
  app.set("view engine", "ejs");


  app.use(express.static(path.join(__dirname, "public")));
  app.use(cors());
  app.use(
    session({ 
      secret: "secret",
      saveUninitialized: false,
      store: store,
      resave: false,

      cookie: {
        httpOnly: true,
        maxAge: sessionValues.session_time,
        sameSite: "strict",
      },
    })
  );

// API 
// user render uchun
app.use('/', require("./router/web/index"));
// admin render uchun
app.use('/adminfor', require("./router/admin/index")); 
// register user
app.use('/user', require('./router/user')); 
// register Admin
app.use('/admincha', require('./router/adminAuth'));
// Course Create
app.use('/course', require('./router/addCourse'));
// Team api 
app.use('/team', require('./router/team'));
// Learn api
app.use('/learn', require('./router/learn'));
// Gallery api
app.use('/gallery', require('./router/gallery'));
// Message api
app.use('/message', require('./router/question')); 
// Ariza api
app.use('/ariza', require('./router/ariza')); 
        
        

 
const port = 3000;  // serverga yuklashdan oldin portni 3000 ga o'zgartir . serverni porti 3000 
app.listen(port, () => {
  console.log(`Server is running in ${port}`);
});