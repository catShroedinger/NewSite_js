let butt = document.getElementById('convert');
let input = document.getElementById('input');
let ress = document.getElementById('result');
butt.onclick = function() {
    if (butt.textContent === 'Доллары') {
        let res = Number(input.value);
        ress.value = res / 73;
    };
};

let AnketaResult1 =  document.getElementById('Anketa-result1');
let AnketaResult2 =  document.getElementById('Anketa-result2');
let AnketaResult3 =  document.getElementById('Anketa-result3');

let knopka =  document.getElementById('send');

knopka.onclick = function() {
    let inpt1 = document.getElementById('inpt1');
    let inpt2 = document.getElementById('inpt2');
    let inpt3 = document.getElementById('inpt3');

    AnketaResult1.value = inpt1.value;
    AnketaResult2.value = inpt2.value;
    AnketaResult3.value = inpt3.value;

    inpt1.value = '';
    inpt2.value = '';
    inpt3.value = '';

};

