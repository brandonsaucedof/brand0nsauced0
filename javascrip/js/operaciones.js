let a=10;
let b=5;
a+=1;
console.log(a);
a=a+b;
console.log("a=a+b :"+a);
a=11;
a+=b;
console.log("a+=b :"+a);
a++;
console.log("a++ :"+a);
a--;
console.log("a-- :"+a);

if((a%2)==0)
    console.log("a es PAR");
else    
    console.log("a es impar");

console.log(a+b+Number("5"));


let notas =[{nombre:'juan',nota:0},{nombre:'pedro',nota:0},{nombre:'maria',nota:0}
,{nombre:'ana',nota:0},{nombre:'Luis',nota:0},{nombre:'Sofia',nota:0},
{nombre:'Carlos',nota:0},{nombre:'Laura',nota:0},{nombre:'Miguel',nota:0},{nombre:'Elena',nota:0}];

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function cargarNotas(){
notas.forEach(nota => {
    nota.nota = getRandomNumber(2, 10);
})};

cargarNotas();
console.log(notas);

let maxNota = Math.max(...notas.map(nota => nota.nota));


let minNota = Math.min(...notas.map(nota=> nota.nota));

let promedio = notas.reduce((sum, nota) => sum + nota.nota, 0) / notas.length;

console.log("Nota más alta:", maxNota);
console.log("Nota más baja:", minNota);
console.log("Promedio:", promedio);


function fclasificar(nota) {
    let $clasificar;
    switch (nota) {
        case 2: 
        case 3:
        case 4:  
            $clasificar = "insuficiente";
            break;
        case 5: 
        case 6:
            $clasificar = "suficiente";
            break;
        case 7: 
        case 8:
            $clasificar = "bien";
            break;
        case 9: 
            $clasificar = "notable";
            break;
        case 10: 
            $clasificar = "sobresaliente";
            break;
        default:
            $clasificar = "fuera de rango";        
    }
    return $clasificar;
}

function impNotas() {
    notas.forEach(nota => {
        console.log(nota.nombre + " - " + nota.nota + " : " + fclasificar(nota.nota));
    });
}
cargarNotas();
impNotas();


