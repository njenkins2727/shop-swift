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
            let dataObj = userInput.value;
            listArr.push(dataObj);
            localStorage.setItem('item', JSON.stringify(listArr));

        } else {
        Error('Something went wrong.');
    }
})
//make object instance class 

class Item {
    constructor(name){
        this.name = name;
    }

//Do you add functionality here?
//add item to DOM 
    static addToList(name){
        // retrivedOjects = localStorage.getItem('item');
        console.log(name)
        //add elements to make card 
        //loop through local sotrage array and append items into card 
    }

}
//display listItems in the dom 
retrivedOjects = JSON.parse(localStorage.getItem('item'));
Item.addToList(retrivedOjects);

//Add items into localStorage 



//WHEN I GET BACK 

// Item isnt being imported from file item.js, Maybe i need to download a pack? node.js or npm ??
// create static function in item.js class Item 