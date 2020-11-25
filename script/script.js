// index === m linha 
// index = n cololuna 
/* array vai receber uma coluna  */

function cratArray(array, m) {

    for (let i = 0; i < m; i++) {

        //linha i vai rereber uma coluna [num de elementos === num colunas ]
        array[i] = [];
    }

}

function zera_M(array) {




    for (let i = 0; i < arrayBi_D.length; i++) {

        //coluna array
        for (let j = 0; j < arrai[i].length; j++) {

            //pisição aij :  i === linha, j === coluna
            arrayBi_D[i][j] = 0;
        }
    }



}


function exib_M(array) {

    console.log(array.length)

}


function matris_principal(array) {


    for (let m = 0; m < arrai.length; i++) {

        for (let n = 0; n < arrai[i].length; n++) {


        }
    }

}

///--MAIN--///////////--MAIN--////////--MAIN--//////


//criando a matriz
let arrayBi_D = [];

//Numero de linhas que a matris vai ter 
let num_m = 7;




//chamada da função que determina o numero de linhas == m; 
//parametros o array e o numero de linhas
cratArray(arrayBi_D, num_m);

//pecorrendo o array e alimentando ele 

//linha array
for (let i = 0; i < arrayBi_D.length; i++) {

    //coluna array
    for (let j = 0; j < 10; j++) {

        //pisição aij :  i === linha, j === coluna
        arrayBi_D[i][j] = Math.floor(10 * Math.random());
    }
}

console.table(arrayBi_D)

//num de colunas em um array
let num_n = arrayBi_D[0].length;

console.log(num_n)