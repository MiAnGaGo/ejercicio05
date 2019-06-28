var mongoose = require('mongoose');
var schema = require('./Schema');

mongoose.connect('mongodb://localhost:27017/test');
//Parameters arg: model name, schema, collection name
var User = mongoose.model('User2',schema,'users2');

var user = new User({
    name: 'John Smith',
    email: 'john@smith.io'
});

var user2 = new User({
    name:'Miguel Garcia',
    email:'miangarciago@ittepic.edu.mx'
});

var user3 = new User({
    name:'Juan perez',
    email:'juan@perez.com'
});

user.save(function(error){
    if (error){
        console.log(error);
        process.exit(1);
    }
    console.log("Saved!!");
    process.emit(0);
});

user2.save(function(error){
    if (error){
        console.log(error);
        process.exit(1);
    }
    console.log("Saved!!");
    process.emit(0);
});

user3.save(function(error){
    if (error){
        console.log(error);
        process.exit(1);
    }
    console.log("Saved!!");
    process.emit(0);
});


//busqueda general
User.find({},function(error,docs){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("consulata general");
    console.log(docs);
});

//busqueda con restriccion
User.find({email:'miangarciago@ittepic.edu.mx'},
function(error,docs){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("consulata con restriccion");
    console.log(docs);
});

User.update({_id: '5d1563add25de13280b1db6b'},{$set: {email:'secambio@ittepic.edu'}},
function(error,docs){
    if(error){
        console.log(error);
        process.emit(1);
    }
    console.log("Actualizacion");
    process.exit(0);
});

User.findByIdAndRemove({_id: '5d1563add25de13280b1db6b'},function(error,docs){
    if(error){
        console.log(error);
        process.emit(1);
    }
    console.log(docs);
    process.exit(0);
});