function n() {
    console.log("não seja gay");
}
n();

function m(x, y, v) { 
    return x + y + v;  
   }   
   console.log(m(1, 2, 3));
   console.log(m(4, 5, 6));

function n(num) {
    console.log("o numero é " + num);
}
n(10);
n(20);

function l(_idade, cnh){
    if(_idade >= 18 && cnh === true) {
        console.log("voce pode dirigir");
    }else {
        console.log("voce não pode dirigir");
    }
}


l(19,true);
l(19,false);