let firstName = ["Miles","Steven","Peter","Tony", "Loki", "Thor"]; 
let lastName = ["Morales" , "Parker", "Stark", "Rogers", "Odinson"];
let age = [18, 17, 23, 34]; 
let threatLvl =[1 , 2 , 3 , 4];
let isHero = true; 
let isAlive = false;

if(age[1] > 18){ 
    console.log("Welcome! " + firstName[1] + " "+lastName[3])
   if( isHero == true){ 
    console.log("Intializing.........................");
    let i = 0;
        for(let i = 0; i <= 100; i+=10){ 
            console.log(i +"%");
            i+=10;
        } 
            console.log("[Avenger Initiative]");
            console.log( firstName[0] + " " + lastName[0]);
            console.log("Threat Level : " + threatLvl[1]);
            if(isAlive = true){ 
                console.log("Age: "+ age[2])
            }else{ 
                console.log("In memory of "+ firstName[0] + " " + lastName[0])                
            }
   }else{ 
            for(let i = 0; i <= 5; i++){ 
                console.log("ALERT == ALERT == ALERT == ALERT")}
        }
}else{
    console.log("Access Denied!!!!") 
    console.log("Redirecting..........")
        let i = 0;
            for(let i = 0; i <= 100; i+=10){ 
                console.log(i +"%");
                i+=10;
            } 
    console.log("C://User/Alizznder.Cahusay/Documents>>")
}
