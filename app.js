//Grab all elements
const formDiv = document.getElementById('form')
let userInput = document.getElementById('user-input')
const formBtn = document.getElementById('form-btn')
const formInput = document.getElementById('form-input')
const listDiv = document.getElementById('list')
const listUl = document.getElementById('list-card')
let errMessage = document.getElementById('error-message');
const errorEl = document.createElement('p');

let listArr = [];

//Make object instance class 
class Item {
    constructor(name){
        this.name = name;
    }
    static displayItems(name){
        //add elements to make card 
        //loop through local sotrage array and append items into card 
        for (let i = 0; i < [name.length]; i++) {
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

//Adds items to list
formBtn.addEventListener('click', function(event){
    event.preventDefault();
    //Saves items to localstorage as an array 
    if(typeof(Storage) !== '') {
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


errorMessage();

});

//displays Items in DOM
retrivedOjects = JSON.parse(localStorage.getItem('item'));
Item.displayItems(retrivedOjects);



function errorMessage(){
    if (userInput.value == '') {
        errorEl.textContent = 'Fill in the feild!';
        errorEl.classList.remove('hide');
        errorEl.classList.add('error-message');
        errorEl.classList.add('second-font');

        formInput.appendChild(errorEl);
        // errMessage.classList.remove('hide');
        // errMessage.textContent = "Fill in the feild";
    }else{
        errorEl.classList.add('hide');
        errorEl.remove("Fill in the feild");
        return userInput.value = '';
    }
}