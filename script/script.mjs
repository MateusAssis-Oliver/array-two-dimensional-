const algLin = {

    zera_M: (array) => {
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array[i].length; j++) { array[i][j] = 0; }
        }
    },

    criArray: (array, m) => { for (let i = 0; i < m; i++) { array[i] = []; } },
    exib_A: (array) => { console.table(array) },
    alim_A: function(array) {
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < 10; j++) { array[i][j] = Math.floor(10 * Math.random()) }
        }
    },
    diagonal_P: (array) => {
        for (let m = 0; m < array.length; m++) {
            for (let n = 0; n < array[m].length; n++) {
                if (m != n) { array[m][n] = '-'; }
            }
        }
        return array;
    },

    diagonal_S: (array_x) => {
        for (let i = 0; i < array_x.length; i++) {
            for (let j = 0; j < array_x[i].length; j++) {
                if (i + j != array_x[i].length - 1) { array_x[i][j] = "-" }
            }
        }
        return array_x;
    },

}

///--MAIN--///////////--MAIN--////////--MAIN--//////
const arrayBiD = [];
algLin.criArray(arrayBiD, 4);
algLin.alim_A(arrayBiD)
algLin.exib_A(arrayBiD)
algLin.exib_A(algLin.diagonal_P(arrayBiD));
algLin.exib_A(algLin.diagonal_S(arrayBiD));
