//global
var globalnaPremenna = "Globálny rozsah!";

function prikladGlobalnehoRozsahu() {
    console.log(globalnaPremenna);
}

prikladGlobalnehoRozsahu();

//local
function prikladLokalnehoRozsahu() {
    var lokalnaPremenna = "Lokálny rozsah!";
    console.log(lokalnaPremenna);
}

prikladLokalnehoRozsahu();
//ReferenceError: lokalnaPremenna is not definedat javascript2.js:15:13 - tato chyba znamena ze premnena je dostupna len v jej funkcii
// console.log(lokalnaPremenna);

//block
var x = 10;

if (x > 5) {
    var blokovaPremenna = "Blokový rozsah!";
    console.log(blokovaPremenna);
}


// Vypise premennu lebo podmienka sa spllnila 
// console.log(blokovaPremenna);

function vonkajsiaFunkcia() {
    var vonkajsiaPremenna = "Ja som z vonkajšej funkcie!";
    
    function vnutornaFunkcia() {
        console.log(vonkajsiaPremenna);
        var vnutornaPremenna = "Ja som z vnútra funkcie";
    }

    vnutornaFunkcia();
    
    // ReferenceError: vnutornaPremenna is not defined at vonkajsiaFunkcia (javascript2.js:40:17) at javascript2.js:43:1 - premennu nevypse lebo je mimo scopu
    // console.log(vnutornaPremenna);
}

vonkajsiaFunkcia();