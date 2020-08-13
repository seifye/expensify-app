/* Objects destructuring */
const person = {
    name: 'Yehia',
    age: 30,
    location: {
        city: 'Bochum',
        temp: 92
    }
}

/* With object destructuring we're able to take an object like a person and rip it apart so he can
pull off various properties out into their own variables. */
/* ES6 Destructuring */ 
/* Creating two variables a name variable and an age variable and it gets those values off of person*/
const { name: firstName = 'Anonymous' , age } = person
const { city, temp: temperature } = person.location
console.log(firstName)
console.log(age)
console.log(city)
console.log(temperature)




/* Array destructuring */
const address = ['Laerholzstrasse 80', 'Bochum', 'NRW', '44801']


/* With array destructuring we're able to take an array like address and rip it apart so he can
pull off various properties out into their own variables. */
/* ES6 Destructuring */
const [ street, loaction, state = 'New York', zip ] = address
/* We don't need to define variables for all the items in the array */
// const [, , state]
console.log(street)
console.log(loaction)
console.log(state)
console.log(zip)