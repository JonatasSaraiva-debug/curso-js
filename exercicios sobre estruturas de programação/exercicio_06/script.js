let idade = 18;
let cnh = false;

if (idade >= 18 && cnh) {  
    console.log("Você pode dirigir!");
} else if (idade >= 18 && !cnh) {
    console.log("Você tem idade para dirigir, mas não tem CNH.");
} else if (idade < 18 && !cnh||cnh) { 
    console.log("Você não tem idade para dirigir e não tem CNH."); 
}