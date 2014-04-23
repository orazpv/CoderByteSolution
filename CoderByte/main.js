var AddItem;


AddItem = function () {
    //get the text to create
    var inputItem = document.getElementById('todoInput').value;

    //exit if nothing was typed
    if (inputItem === "") {
        alert("You didn't type anything!");
        return;
    }

    //Get the list node
    var orderedList = document.getElementById('listId');

    //create the text
    var txtItem = document.createTextNode(inputItem);

    //create list <li>
    var newli = document.createElement("li");

    //Add onclick Attribute to the <li> tag
    newli.setAttribute("onClick", "listOnclick()");

    //Append the text to li
    newli.appendChild(txtItem);

    //Apend the li to the list <ol>
    orderedList.appendChild(newli);
};

var listOnclick = function () {
    if (event.target.style.textDecoration === 'line-through') {
        event.target.style.textDecoration = 'none';
    } else {
        event.target.style.textDecoration = 'line-through';
    }
    
};