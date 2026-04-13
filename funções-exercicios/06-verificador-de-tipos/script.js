function tipo(valor) {
    if(typeof valor == "number") {
        console.log("isso é um numero");
}else if(typeof valor == "string") {
        console.log("isso e uma string");
}else if(typeof valor == "boolean") {
        console.log("isso é boolean");
}
}

tipo(1);
tipo("jonatas");
tipo(true);
