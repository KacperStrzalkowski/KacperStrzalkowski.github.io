const counter = document.querySelector('.counter');

if(localStorage.getItem('counter') === null){
    localStorage.setItem('counter', 0);
}

counter.innerHTML = localStorage.getItem('counter');

function add(){
    let counter_storage = parseInt(localStorage.getItem('counter'));
    localStorage.setItem('counter', counter_storage + 1);
    document.querySelector('.counter').innerHTML = counter_storage + 1;
}