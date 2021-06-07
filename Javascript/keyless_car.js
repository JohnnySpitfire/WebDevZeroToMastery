function checkUserAge(){
    return prompt("What is your age?");
}

var userAge = checkUserAge();

    if (userAge < 18) {
    
         alert("you are too young to drive this car. Powering off");
    
    }
    else if (userAge === 18){

        alert("congratulations on your first year of driving");
    }

    else if (userAge > 18) {

        alert("powering on. enjoy the ride");
    }



function checkUserAge(userAge) {

    if (userAge < 18) {
    
        alert("you are too young to drive this car. Powering off");
   
   }
   else if (userAge === 18){

       alert("congratulations on your first year of driving");
   }

   else if (userAge > 18) {

       alert("powering on. enjoy the ride");
   }
}

checkUserAge(21);