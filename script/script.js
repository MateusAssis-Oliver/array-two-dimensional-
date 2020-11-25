// index === m linha 
// index = n cololuna 
/* array vai receber uma coluna  */
function cratArray(array, m) {

    for (let i = 0; i < m; i++) {

        //linha i vai rereber uma coluna [num de elementos === num colunas ]
        array[i] = [];
    }

}

//criando a matrix
let arrayBi_D = [];
//Numero de linhas que a matris vai ter 
let m = 0;

//chamada da função que determina o numero de linhas == m; 
//parametros o array e o numero de linhas
cratArray(arrayBi_D, num_m);

console.table(arrayBi_D)


//pecorrendo o array e alimentando ele 

//linha array
for (let i = 0; i < arrayBi_D.length; i++) {

    //coluna array
    for (let j = 0; j < 2; j++) {
        //pisição aij :  i === linha, j === coluna
        arrayBi_D[i][j] = i;
    }
}
console.table(arrayBi_D)