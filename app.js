const age = parseInt(prompt("How old are you?"));



if(isNaN(age)|| age < 0){
    console.log("Please write a real positive number");
}else if(age<18){
    console.log("Your are too young.");
}else if(age>=18 && age < 50){
    console.log("you can drink");
} else if (age>50&& age<80){
    console.log("you should excrcise!");
}else if(age>80){
    console.log("You can do whatever you want.");
}
