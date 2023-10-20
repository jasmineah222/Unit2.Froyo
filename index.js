// Froyo Store 

const userInputString = prompt ("Select Flavors to add to cart.", "Vanilla, Strawberry, Chocolate, Coffee");


// split into array of strings
const stringArray = userInputString.split(",")

// convert to array of numbers to keep track of how many of each flavor ordered
const froyo = []; //froyo is not an object

for (let i = 0; i < stringArray.length; i++) {
    const str = stringArray[i];
    const number = parseInt(str);
    froyo.push(number);
}

// make object
const yogurt = {
    flavor: ["Vanilla", "Strawberry", "Chocolate", "Coffee"],
    size: ["small","medium","large"],
    price: 3,
}


// loop to look through flavors

function orderFroyo (froyo){
        for (const key in yogurt){

            if ('flavor' in yogurt === true){
                for (let i = 0; i < froyo.lenght; i++) {
                   i += froyo[0]
                    
                }                 
                console.log("Ordered " +  + " of " + yogurt.flavor[0])


            }
        }


        // for (froyo.flavor.(Strawberry)){
            // console.log("You have ordered "+ yogurt.flavor[1])}

        // for (froyo.flavor.(Chocolate)){
            // console.log("You have ordered "+ yogurt.flavor[2])}

        // for (froyo.flavor.(Coffee)){
            // console.log("You have ordered "+ yogurt.flavor[3])}

    } 

    orderFroyo (froyo)
// function correctly counts number of each flavor ordered