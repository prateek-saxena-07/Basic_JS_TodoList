const textarea = document.querySelector('.textarea')
const button = document.querySelector('.buttoninput')
const todolist=document.getElementById('todo')

button.addEventListener('click', () =>
{
    if (textarea.value.trim() !== '') {
      const todoItem = document.createElement("p");
      const error_span=document.createElement('p')
   const del = document.createElement("button")
        const check = document.createElement("button")
        const edit = document.createElement("button");
        const save = document.createElement("button");
        const inputField = document.createElement("input");
      error_span.classList.add('hide');
       error_span.classList.add("s");
      error_span.innerHTML='Empty text'
      
   todoItem.innerHTML = textarea.value;
      todolist.append(todoItem);
      todolist.append(error_span);
   del.innerText = "x";
     todoItem.append(del);
     check.innerHTML = `<i class="fa-solid fa-check"></i>`;
        todoItem.append(check)
         edit.innerText = "Edit";
        todoItem.append(edit);
        save.innerText = "Save";
        save.style.display = "none"; // Initially hidden
        

        inputField.type = "text";
        inputField.value = textarea.value;
        inputField.style.display = "none"; // Initially hidden
        todoItem.append(inputField);
        todoItem.append(save);


     textarea.value=''
     del.addEventListener('click', deleteTodoItems)
     check.addEventListener('click', checkTodoItem)

        edit.addEventListener("click", () => {
          inputField.style.display = "inline";
          save.style.display = "inline";
          edit.style.display = "none";
          todoItem.firstChild.textContent = ""; // Clear the text content
        });
      save.addEventListener("click", () => {
        if (inputField.value.trim()=='')
        {
          
          error_span.classList.remove('hide')
        }
        else{   todoItem.firstChild.textContent = inputField.value; // Save the updated text
        inputField.style.display = "none";
        save.style.display = "none";
          edit.style.display = "inline";
        error_span.classList.add("hide");}
       
        });
     
  }
    else {
      
  }
    


})
function deleteTodoItems(event)
{
    const button = event.target;
    const todoItem = button.parentElement;
    todoItem.remove();
}
function checkTodoItem(event)
{  
    // this.parentElement.classList.toggle('done')
    event.target.parentElement.parentElement.classList.toggle('done')
    
}