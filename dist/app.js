"use strict";
function maior(a1, b2) {
    if (a1 > b2) {
        return `${a1} É maior que ${b2}`;
    }
    else if (a1 < b2) {
        return a1 + "É menor que" + b2;
    }
    else {
        return "Os números são iguais.";
    }
}
;
console.log(maior(12, 5));
