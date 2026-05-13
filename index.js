const jariJari = 14;
let phi = 0;
let luasLingkaran = 0;
let kelilingLingkaran = 0;

if ( jariJari % 7 == 0) {
    phi = 22/7
}
else {
    phi = 3,14
}

console.log(phi);

luasLingkaran = phi * jariJari * jariJari;
kelilingLingkaran = 2 * phi * jariJari;

let hasil = `
Luas lingkaran adalah ${luasLingkaran}

Keliling lingkaran adalah ${kelilingLingkaran}
`;


console.log(hasil);