import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
  <h1>Hello Brenae!</h1>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello This is a Vite app!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))





const jsonObj = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  favoriteMeals: [
      "McChicken with Small Fries",
      "Spaghetti and Meatballs",
      "Chicken and Broccoli with White Rice"
  ],
  relatives: {
      brother: "Jimmy Doe",
      mother: "Linda Ann-Doe",
      father: "Jeremy Doe"
  }
}


const newJSON = JSON.stringify(jsonObj)

console.log(newJSON);
console.log(typeof newJSON);


console.log(JSON.parse(newJSON));






 
const userData = {  
  firstName: "Alice",  
  lastName: "Johnson",  
  age: 28,  
  favoriteMeals: [  
      "Sushi Roll",  
      "Grilled Cheese Sandwich",  
      "Beef Tacos"  
  ],  
  contact: {  
      email: "alice@example.com",  
      phone: "555-1234"  
  }  
};  


const jsonString = JSON.stringify(userData);  
console.log(jsonString);  


const parsedData = JSON.parse(jsonString);  

  
const appDiv = document.getElementById('app');  

appDiv.innerHTML = `  
  <h1 id="fullName">${parsedData.firstName} ${parsedData.lastName}</h1>  
  <h2 id="age">Age: ${parsedData.age}</h2>  
  <address>  
      <div>Email: <span id="email">${parsedData.contact.email}</span></div>  
      <div>Phone: <span id="phone">${parsedData.contact.phone}</span></div>  
  </address>  
  <h3>Favorite Meals:</h3>  
  <ul id="favoriteMealsList"></ul>  
`;  

  
const favoriteMealsList = document.getElementById('favoriteMealsList');  
parsedData.favoriteMeals.forEach(meal => {  
  const listItem = document.createElement('li');  
  listItem.textContent = meal;  
  favoriteMealsList.appendChild(listItem);  
});  