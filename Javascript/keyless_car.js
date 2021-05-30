var userAge = prompt("what is your age");

userAge = Number(userAge);

    if (userAge < 18) {
    
         alert("you are too young to drive this car. Powering off");
    
    }
    else if (userAge === 18){

        alert("congratulations on your first year of driving");
    }

    else if (userAge > 18) {

        alert("powering on. enjoy the ride");
    }


