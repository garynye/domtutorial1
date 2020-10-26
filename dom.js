// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title =  123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID //
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < items.length; i++){
//   items[i].style.backgroundColor = '#f4f4f4';
// }

// GETELEMENTSBYTAGNAME //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < li.length; i++){
//   li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELECTOR //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND"

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERYSELECTORALL //
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even= document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; i++){
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor = '#ccc';
// }



//traversing the dom

var itemListvar = document.querySelector('#items')
let itemListlet = document.querySelector('#items')
// lets look at parent node prop

/* console.log(itemListvar.parentNode)
console.log(itemListlet.parentNode)

itemListlet.parentNode.style.backgroundColor = 'lightgrey'

console.log(itemListvar.parentNode)
console.log(itemListvar.parentNode.parentNode.parentNode) */


/* itemListlet.parentNode.style.backgroundColor = 'lightgrey'
//parent element also works
console.log(itemListvar.parentNode)
console.log(itemListvar.parentNode.parentNode.parentNode)  */

/* console.log(itemListlet.children)
console.log(itemListlet.children[2])
itemListlet.children[2].style.background = 'yellow'

//first child - don't use first childe, use first element child or it grabs the strange text inbetween
//can also use last element child

console.log(itemListlet.firstElementChild)
 */
/* itemListlet.firstElementChild.textContent = 'rename1'


console.log(itemListlet.previousElementSibling) */

//create element

// create a div
/* 
let newDiv = document.createElement('div')

//add class
newDiv.className = 'hello'

//add id
//newDiv.id = 'hello1'

//add attribute

newDiv.setAttribute('title', 'Hello Div')
newDiv.setAttribute('id', 'hello1')

//create text node

let newDivText = document.createTextNode('Hello World text node')

//add text to div
newDiv.appendChild(newDivText)

let con = document.querySelector('.container')
let h1 = document.querySelector('h1')

console.log(newDiv)

// we are inserting into the container - we are inserting the newdiv before the header h1 in the container

con.insertBefore(newDiv, h1) */


//EVENT NOTES

// let btn = document.querySelector('#button').addEventListener('click', buttonClick)

// function buttonClick(e) {

//     // console.log('123')
//     // document.querySelector('h1').textContent = "test"
//     // console.log(e)
// let output = document.createElement('div')
// let outputtext = document.createTextNode(e.target)
// output.appendChild(outputtext)

// document.querySelector('#main').insertBefore(output,document.querySelector('#button'))
//     // console.log(outputtext)

//     // console.log(e.clientX)
//     // console.log(e.offsetX)

// }



let btn = document.querySelector('#button')
let box = document.querySelector('#box')

let itemInput = document.querySelector('input[type="text"]')
let form = document.querySelector('form')
var selectItem = document.querySelector('#sel')

//itemInput.addEventListener('keydown', runEvent)
itemInput.addEventListener('focus', runEvent)
selectItem.addEventListener('change', runEvent)

form.addEventListener('submit', runEvent)


// btn.addEventListener('click', runEvent)
// btn.addEventListener('dblclick', runEvent)
// btn.addEventListener('mousedown', runEvent)

// box.addEventListener('mouseenter', runEvent)
// box.addEventListener('mouseleave', runEvent)
// box.addEventListener('mouseover', runEvent)
// box.addEventListener('mouseout', runEvent)

// box.addEventListener('mousemove', runEvent)

function runEvent(e) {
    e.preventDefault();
    
    console.log('Event type' + e.type)
    console.log(e.target.value)
    // document.querySelector('#box').innerHTML = '<h3>mouseX: ' +e.offsetX +'</h3><h3>mouseY: ' + e.offsetY +'</h3>'
    // box.style.backgroundColor = 'rgb(' +e.offsetX+','+ e.offsetY +',40)'
    box.innerText = e.target.value
}
