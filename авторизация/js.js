  const id = (x) => {
    return document.getElementById(x);
}
let mail = id('mail');
let pass = id('pass');
let itemList = localStorage.itemList ? JSON.parse(localStorage.itemList) : [];

function alerted(){
    let value = mail.value;
    if (value.length > 0) {
       alert("Успешно");
    } else {
        alert("Введите информацию");
    }
  
  }


addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addEvent();
})

renderList();

