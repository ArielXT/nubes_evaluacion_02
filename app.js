var express= require('express');
var app=express();
var path=require('path');
var expressHbs=require('express-handlebars');
var bodyparser=require('body-parser');
var PORT=process.env.PORT || 4500;

app.engine('hbs', expressHbs({defaultLayout: 'base', extname: 'hbs'}));
app.set('view engine','hbs');
app.set('views', path.join(__dirname,'views'));
app.use("/public", express.static('public')); 

//Middlewares

app.use(bodyparser.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

//enrutadores
var indexRouter=require('./routes/index');
var alumnosRouter=require('./routes/alumnos');
app.use('/index', indexRouter);
app.use('/alumnos', alumnosRouter);



app.listen(PORT, () =>{
    console.log(`Pagina corriendo en el puerto: ${PORT}`);
    console.log(`Dirigete a la pagina: http://localhost:4500/index`);
});