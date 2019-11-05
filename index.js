document.querySelector("form").addEventListener("submit", addTodo);

let addTodo = (e) => {
    e.preventDefault();
    let item = document.createElement("li");
    item.innerText = document.getElementById("item").value;
    item.addEventListener("click", completeTodo);

    let btn = document.createElement("button");
    btn.innerText = "x";
    btn.addEventListener("click", removeTodo)
    item.append(btn)

    let list = document.querySelector("ul");
    list.appendChild(item);
}

let removeTodo = (e) => {
    e.target.parentNode.remove();
}

let completeTodo = (e) => {
    let value = e.target.getAttribute("aria-checked");
    if(value !== "true"){
        e.target.setAttribute("aria-checked", "true")
    } else {
        e.target.setAttribute("aria-checked", "false")
    }
}