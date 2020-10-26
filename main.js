

let addForm = document.querySelector('#addForm')
let itemList = document.querySelector('#items')
let filterOn = document.querySelector('#filter')


//form submit event
addForm.addEventListener('submit', addItem)

//add item function
function addItem(e) {

    e.preventDefault();
    let inputValue = document.querySelector('#item').value
    let newItem = document.createElement('li')
    let rmbtn = document.createElement('button')
    newItem.innerText = inputValue
    newItem.className = "list-group-item"
    rmbtn.className = "btn btn-danger btn-sm float-right delete"
    rmbtn.innerText = "X"
    newItem.appendChild(rmbtn)

    itemList.appendChild(newItem)
    // itemList.appendChild(('<li class="list-group-item">' + newItem + '<button class="btn btn-danger btn-sm float-right delete">X</button></li>'))

    console.log(inputValue)
}

itemList.addEventListener('click', removeItem)

function removeItem(e) {
    e.preventDefault();
    if(e.target.classList.contains('delete')){
        console.log(e.target.parentNode)
        console.log(e.target.parentElement)
        console.log(e)

        itemList.removeChild(e.target.parentNode)



    }


    //e.target.parentNode.hide
}


filterOn.addEventListener('keyup', filterItems)

function filterItems(e) {

    //get text and convert to lowercast
    let filterText = e.target.value.toLowerCase()
    console.log(filterText)
    //get all of the lis
    let filtered = itemList.querySelectorAll('li')
   // let filtered = itemList.textContent

    console.log(filtered)

    filtered.forEach(element => {
        
        let contents = element.textContent.toLowerCase()
        if (contents.includes(filterText)) {
            element.style.display = 'block'
        } else {
            element.style.display = 'none'
        }
    });

}