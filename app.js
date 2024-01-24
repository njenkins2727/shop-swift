//Grab all elements
const formDiv = document.getElementById('form')
let userInput = document.getElementById('user-input')
const formBtn = document.getElementById('form-btn')

const listDiv = document.getElementById('list')
const listUl = document.getElementById('list-cards');

let listArr = [];

//add event listener for submit form 
formBtn.addEventListener('click', function(event){
    event.preventDefault();
    
//Saves items to localstorage as an array 
    if(typeof(Storage) !== "undefined") {
        if (localStorage.getItem('item') && localStorage.getItem('item').length > 0)
            listArr = JSON.parse(localStorage.getItem('item'));
        dataObj = userInput.value;
        listArr.push(dataObj);
        localStorage.setItem('item', JSON.stringify(listArr));

        retrivedOjects = localStorage.getItem('item');

    } else {
        alert("Error: Localstorage not supported");
    }
})
//make object instance class 


//display listItems in the dom 

//Add items into localStorage 



