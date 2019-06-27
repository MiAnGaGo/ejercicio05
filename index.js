var user = new user({
    name: 'John Smith',
    email: 'john@smith.io'
});

user.save(function(error){
    if (error){
        console.log(error);
        process.exit(1);
    }
    console.log("Saved!!");
    process.emit(0);
});