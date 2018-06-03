var form = document.getElementById('addForm');     //this is the form
var itemList = document.getElementById('items');   //this is the ul
var filter = document.getElementById('filter');   //this is the filter <input>

//Form submit event
form.addEventListener('submit', addItem);

//Delete event 
itemList.addEventListener('click', removeItem);

//Filter Items Event
filter.addEventListener('keyup',filterItems);

//Add Item
function addItem(e) {
    e.preventDefault();   //prevents the "normal" submission of the form
    //console.log(1);  //debugging

    //Get Input value
    var newItem = document.getElementById('item').value;

    //Create a new li element
    var li = document.createElement('li');

    //add class to the li  -- list-group-item - like all the others
    li.className = 'list-group-item';
    console.log(li);  //debugging

    //add/append  text node with input value from the form to the li item
    li.appendChild(document.createTextNode(newItem));

    //Create the delete element button that will be added with the li
    var deleteBtn = document.createElement('button');
    //Add classes to delete button -make like other delete buttons
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    // Append button to li
    li.appendChild(deleteBtn);

  // Append li to list
    itemList.appendChild(li)
}//end of AddList

//Remove Item from List
function removeItem(e) {
    if(e.target.classList.contains('delete')) {
        console.log(1);  //debugging
        if(confirm('Are You Sure?')) {
            var li = e.target.parentElement;  //we are clicking the ul, but only the button has delete class, whose parent is li
            itemList.removeChild(li);         //itemList is the ul --li is child of itemList
        }
    } 
}

function filterItems(e) {
    // convert text to lowercase
    var filterText = e.target.value.toLowerCase();
    console.log(filterText);  //debugging

    // Get lis
    var items = itemList.getElementsByTagName('li');

    // Convert to an array 
    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        console.log(itemName);  //debugging

        if(itemName.toLowerCase().indexOf(filterText) != -1) {  //comparing the itemName to the search box text, -1 means no match
            item.style.display = 'block';
        } 
        else {
            item.style.display = 'none';
        }
    }  
    );
}

function loadArray(item) {
    var itemName = item.firstChild.textContent;

}
