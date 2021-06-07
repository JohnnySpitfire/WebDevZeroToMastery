var user = {
    username: "JohnnySpitfire",
    password: "password",
};

var database = [
    user,
    {
        username: "Sally",
        password: "123"
    },
    {
        username: "Ingrid",
        password: "777"
    }
];

var newsfeed = [
    {
        username: "Jim",
        timeline: "Cats are cool"
    },
    {
        username: "Timmy",
        timeline: "Dad is beating me"
    },
    {
        username: "Emily",
        timeline: "Javascript is nice"
    },
];

function isUserValid(username, password){

    for(var i=0; i < database.length; i++){
        if (username === database[i].username && password === database[i].password){
            return true;
        } 
    }
    return false;
}

function signIn(username, password){

    console.log(username, password);
    console.log(typeof(password));

        if (isUserValid(username, password)){
            console.log(newsfeed);
        } else {
            alert("Sorry the username or password was incorrect");
        }
    }

    var userNamePrompt = prompt("What's your username?");
    var passwordPrompt = prompt("What's your password?");

signIn(userNamePrompt, passwordPrompt);
