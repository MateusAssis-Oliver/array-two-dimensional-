// index === m === linha 
// index = n cololuna 
/* array vai receber uma coluna  */
function cratArray(array, m) {
    for (let i = 0; i < m; i++) {
        //linha i vai rereber uma coluna [num de elementos === num colunas ]
        array[i] = [];
    }
}

function zera_M(array) {

    for (let i = 0; i < array.length; i++) {

        //coluna array
        for (let j = 0; j < array[i].length; j++) {
            array[i][j] = 0;
        }
    }
}

function exib_M(array) { console.table(array) }

function matris_principal(array) {

    for (let m = 0; m < array.length; m++) {
        for (let n = 0; n < array[m].length; n++) {

            if (m != n) { array[m][n] = '-'; }
        }
    }
    return array;
}

function alimenta_array(array) {

    //pecorrendo o array e alimentando ele 
    // m array
    for (let i = 0; i < array.length; i++) {
        //coluna array
        for (let j = 0; j < 10; j++) {
            //pisição aij :  i === linha, j === coluna
            array[i][j] = Math.floor(10 * Math.random());
        }
    }
}

///--MAIN--///////////--MAIN--////////--MAIN--//////


//criando a matriz
let arrayBiD = [];

//Numero de linhas que a matris vai ter 
let num_m = 7;


//chamada da função que determina o numero de linhas == m; 
//parametros o array e o numero de linhas
cratArray(arrayBiD, num_m);
alimenta_array(arrayBiD)
exib_M(arrayBiD)
exib_M(matris_principal(arrayBiD))