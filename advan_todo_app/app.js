let input = document.querySelector("input");
let btn = document.querySelector("#btn");
let contain = document.querySelector("#container");



let todos = JSON.parse(localStorage.getItem("todo")) || [];

let editInd = null;

let saveTodo = ()=>{
    localStorage.setItem("todo", JSON.stringify(todos))
}


let rendarTodo = ()=>{
    contain.innerText = "";

    todos.forEach((todo, index) => {
        let ul = document.createElement("ul");
        let li = document.createElement("li");
        let delbtn = document.createElement("button");
        let ediBtn = document.createElement("button");
        delbtn.classList.add("delBtn")
        ediBtn.classList.add("ediBtn")

        li.innerText = todo;
        delbtn.innerText = "Delete";
        ediBtn.innerText = "Edit";

        li.appendChild(delbtn);
        li.appendChild(ediBtn);
        ul.appendChild(li);
        contain.appendChild(ul);

        delbtn.addEventListener("click", ()=>{
            todos.splice(index, 1)
            saveTodo();
            rendarTodo();
        })

        ediBtn.addEventListener("click", ()=>{
            input.value = todo;
            editInd = index;
            btn.innerText = "Update"
        })
        btn.innerText = "Add"
    });
}



btn.addEventListener("click", ()=>{
    let value = input.value.trim();
    input.value = "";

    if(value === "") return;

    if(editInd !== null){
        todos[editInd] = value;
        editInd = null;
    }else{
        todos.push(value);
    }
    
    saveTodo();
    rendarTodo();
})
