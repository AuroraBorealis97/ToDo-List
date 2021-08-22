let input = document.querySelector('input[type=text]');
let select = document.querySelector('select');
let addBtn = document.querySelector('.add');
let list = document.querySelector('.list');

addBtn.addEventListener('click', addTask);
 

 //add task function

function addTask(){
    let li = document.createElement('li');
    let checkbox = document.createElement('input');
    let span1 = document.createElement('span');
    let span2 = document.createElement('span');
    let edit = document.createElement('span');
    let del = document.createElement('span');
     
    checkbox.type = 'checkbox';
    
    span1 = checkbox;
    span2.innerHTML = input.value;
    edit.innerHTML = 'Edit';
    del.innerHTML = 'Delete';
    span2.classList.add('item');
    edit.classList.add('edit');
    del.classList.add('delete');

   
    list.append(li);
    li.append(span1);
    li.append(span2);
    li.append(edit);
    li.append(del);
    
    
    
}