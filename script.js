let input = document.querySelector('input[type=text]');
let select = document.querySelector('select');
let addBtn = document.querySelector('.add');
let list = document.querySelector('.list');
let clearBtn = document.querySelector('.clear');
let closeBtn = document.querySelector('.close');

addBtn.addEventListener('click', addTask);

clearBtn.addEventListener('click', clear);

select.addEventListener('change',filter);
 

 //add task function

function addTask(){
    let li = document.createElement('li');
    let checkbox = document.createElement('input');
    let span1 = document.createElement('span');
    let span2 = document.createElement('span');
    let edit = document.createElement('button');
    let del = document.createElement('button');
     
    checkbox.type = 'checkbox';
    
    span1 = checkbox;
    span2.innerHTML = input.value;
    edit.innerHTML = 'Edit';
    del.innerHTML = 'Delete';

    //delete item on todo list

    del.onclick = () => li.remove();

    edit.onclick = () => {
        input.value = span2.innerHTML;
        closeBtn.style.visibility = "visible";
       // li.style.opacity = 0.7;
        
       // edit.disabled =true;
      //  del.disabled = true;


        //close edit input button function
        closeBtn.onclick = () =>{
          //  li.style.opacity = 1;
            input.value ='';
            closeBtn.style.visibility ='hidden';
         //   edit.disabled = false;
         //   del.disabled = false;
        }
        li.remove();
        }
    

    span2.classList.add('item');
    edit.classList.add('edit');
    del.classList.add('delete');
    checkbox.classList.add('checkbox');

   
    list.append(li);
    li.append(span1);
    li.append(span2);
    li.append(edit);
    li.append(del);
    
    input.value = '';
    
}

//edit item in function

function editBtn(){
    addTask();
    
}
// disable btn function
  


//function to filter todo list

function filter(){
    let items = document.querySelectorAll('li');
    let checkboxes = document.querySelectorAll('.checkbox')
if(select.value === 'completed'){
    
    for(let i = 0; i <= items.length; i++){
        items[i].style.display = "block";
      if(checkboxes[i].checked === false){
          items[i].style.display = "none";
      }
    }
}
else if(select.value === 'unfinished'){
   
    for(let i = 0; i <= items.length; i++){
        items[i].style.display = "block";
        if(checkboxes[i].checked === true){
            
            items[i].style.display = "none";
        }
      }
}else{for(let i = 0;i <= items.length; i++){
    items[i].style.display = "block";
}}
}

//clear function

function clear(){
    let items = document.querySelectorAll('li');
    for(let i = 0; i <= items.length; i++){
        items[i].remove();
    }
}