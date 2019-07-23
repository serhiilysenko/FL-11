const addItem = document.getElementById('add_item'),
      todoList = document.getElementById('todo_list'),
      warningText = document.getElementById('warningText'),
      MAX_LIST_SIZE = 10,
      editListItem = document.getElementsByClassName('edit_item'),
      saveListItem = document.getElementsByClassName('save_item'),
      deleteListItem = document.getElementsByClassName('delete_item');
let inputField = document.getElementById('inputText'),
    inputValue = document.getElementById('inputText').value,
    itemCounter = 0;
function setAttributes(elem, attributes){
    for(let key in attributes){
        if (attributes.hasOwnProperty(key)){
            elem.setAttribute(key, attributes[key]);
        }
    }
}
let rootNode = document.getElementById('root');
inputField.onkeyup = inputField.onfocus = inputField.onchange = g => {
    let btnStatus = inputField.value.trim();
    if (btnStatus && itemCounter < MAX_LIST_SIZE) {
        addItem.disabled = false;
    } else {
        addItem.disabled = true;
    }
    
    addItem.onclick = () => {
        addNewItem();
        addItem.disabled = true;
    }
};
function addNewItem(){
    let list_item = document.createElement('li');
    setAttributes(list_item, {class: 'list_item'});
    list_item.draggable = true;
    let check_box_outline = document.createElement('i');
    setAttributes(check_box_outline, {class: 'material-icons'});
    let chkBoxOut = document.createTextNode('check_box_outline_blank');
    check_box_outline.appendChild(chkBoxOut);
    let check_box = document.createElement('i');
    setAttributes(check_box, {class: 'material-icons done'});
    let chkBox = document.createTextNode('check_box');
    check_box.appendChild(chkBox);
    let textItem = document.createElement('p');
    setAttributes(textItem, {class: 'text'});
    let text = document.createTextNode(inputField.value);
    textItem.appendChild(text);
    let editItem = document.createElement('i');
    setAttributes(editItem, {class: 'material-icons edit_item'});
    let edit = document.createTextNode('edit');
    editItem.appendChild(edit);
    let saveItem = document.createElement('i');
    setAttributes(saveItem, {class: 'material-icons save_item'});
    let save = document.createTextNode('save');
    saveItem.appendChild(save);
    let deleteItem = document.createElement('i');
    setAttributes(deleteItem, {class: 'material-icons delete_item'});
    let del = document.createTextNode('delete');
    deleteItem.appendChild(del);
    list_item.appendChild(check_box_outline);
    list_item.appendChild(check_box);
    list_item.appendChild(textItem);
    list_item.appendChild(editItem);
    list_item.appendChild(saveItem);
    list_item.appendChild(deleteItem);
    todoList.appendChild(list_item);
    itemCounter++;
    inputField.value = '';
    check_box_outline.onclick = function (event) {
        event.target.innerText = 'check_box';
    }
    if (itemCounter >= MAX_LIST_SIZE) {
        warningText.style.display = 'block'; 
        addItem.disabled = true;
    }
    for (let i = 0; i < deleteListItem.length; i++) {
        deleteListItem[i].onclick = function() {
            this.parentElement.remove();
            itemCounter--;
            addItem.disabled = true;
            if (deleteListItem.length < MAX_LIST_SIZE) {
                warningText.style.display = 'none';
            }
        }
    }
let dragSrcElem = null;
todoList.addEventListener('dragstart', e => {
  dragSrcElem = e.target;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
});
todoList.addEventListener('dragover', e => {
  if (e.target.className === 'list_item') {
    e.preventDefault();
    e.target.style.transform = 'translate(10px, 7px)';
    e.dataTransfer.dropEffect = 'move';
  }
});
todoList.addEventListener('dragleave', e => {
  e.target.style.transform = '';
});
todoList.addEventListener('drop', e => {
  if (e.target.className === 'list_item') {
    e.preventDefault();
    e.target.style.transform = '';
    todoList.insertBefore(dragSrcElem, e.target);
  } else {
    e.preventDefault();
    e.target.style.transform = '';
    todoList.insertAfter(dragSrcElem, e.target);
  }
});
}
