let a = document.getElementById('bar');
let b = document.getElementById('search');

b.addEventListener("click",function (){
    Myfunction(a.value);
});
a.addEventListener("change",function (){
    Myfunction(a.value);
});

function Myfunction (text){
    
    window.location.href='https://www.google.com/search?q='+ text;
}

