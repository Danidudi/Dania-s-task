const input = document.getElementById ("input");
const date = document.getElementById ("date");
const addBtn = document.getElementById ("addBtn");
const list = document.getElementById ("list");

addBtn.addEventListener("click", function(){
  if (input.value === "" || date.value === "")
  {
    alert("Fill All information required");
  }
  else  {
    const li = document.createElement("li");
    const task = document.createElement("span");
    const dueDate = document.createElement("span");
    const deleteBtn = document.createElement("button");
    const editBtn = document.createElement("button");
    task.innerText = input.value;
    dueDate.innerText = date.value;
    deleteBtn.innerText = "Delete";
    editBtn.innerText = "Edit";


    li.appendChild(task);
    li.appendChild(dueDate);
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    list.appendChild(li);

    input.value = "";
    date.value = "";
    addBtn.innerText = 'Add';
    incres=0;

    deleteBtn.addEventListener("click", function(){
      li.remove()
    });

    editBtn.addEventListener('click',()=>{
      input.value=task.innerText;
      date.value=dueDate.innerText;
      addBtn.innerText='edit';
    });


  }
})