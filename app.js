//Grab all elements
const formDiv = document.getElementById('form')
let userInput = document.getElementById('user-input')
const formBtn = document.getElementById('form-btn')

const listDiv = document.getElementById('list')
const listUl = document.getElementById('list-card');

let listArr = [];

//Make object instance class 
class Item {
    constructor(name){
        this.name = name;
    }
    static displayItems(name){
        //add elements to make card 
        //loop through local sotrage array and append items into card 
        for (let i = 0; i < name.length; i++) {
            const element = name[i];
            const newEl = document.createElement('li');
            newEl.classList.add('list-items')
            listUl.appendChild(newEl)
            newEl.innerHTML = element;
        }
        
    }

    static addItem(name){
        //if item is or is not in array in local storage
            //append to list 
            console.log(name[name.length - 1]);
            const newEl = document.createElement('li');
            newEl.classList.add('list-items');
            listUl.appendChild(newEl)
            newEl.innerHTML = name[name.length - 1];
    }
}

//add event listener for submit form 
formBtn.addEventListener('click', function(event){
    event.preventDefault();
    //Saves items to localstorage as an array 
    if(typeof(Storage) !== "undefined") {
        if (localStorage.getItem('item') && localStorage.getItem('item').length > 0)
        listArr = JSON.parse(localStorage.getItem('item'));
    let dataObj = userInput.value;
    listArr.push(dataObj);
    localStorage.setItem('item', JSON.stringify(listArr));
    
} else {
    Error('Something went wrong.');
}
retrivedOjects = JSON.parse(localStorage.getItem('item'));
Item.addItem(retrivedOjects);

})

retrivedOjects = JSON.parse(localStorage.getItem('item'));
Item.displayItems(retrivedOjects);
