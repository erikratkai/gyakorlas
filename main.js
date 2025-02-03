// ๋࣭ ⭑๋࣭ 1. óra ๋࣭ ⭑๋࣭ 

//letes cuccok

// INT
let int = 0 // létrehozom a változót 'let'-tel
console.log(int) // teszt log h lassuk h megvaltozott.
int = 1 // megváltoztatom az értékét
console.log(int) // kilogoljuk az asd változót

//string
let string = "skibidi" // ugyanez csak stringgel
console.log(string) 
string = "rizz"
console.log(string)

//Bool
let bool = true // megint ugyanaz csak boollal
console.log(bool)
bool = false
console.log(bool)

//Objektumos cuccok
let objektum = {nev: "Faragó Richárd", kor: 8, ferfi: true} // ugyanez objektummal.........
console.log(objektum) // objektum logolasa
objektum.nev = "Hajdú B. István" // az objektumnak csak a nev értékét változtattam meg.
console.log(objektum.nev) // objektum ertekeinek a logolasa
console.log(objektum.kor) // .
console.log(objektum.ferfi) // .

objektum.asd = "b" 
console.log(objektum.asd)
console.log(objektum)

objektum = {hawk: "tuah"} // objektum ertekeinek a megvaltoztatasa


console.log(objektum) // objektum logolasa
console.log(objektum.hawk) // hawk logolasa az objektumon belul

//++ --
console.log(int) // az int értéke nőtt eggyel
int++ // az int értéke nőtt eggyel
console.log(int)
int++ //az int értéke megint nőtt eggyel
console.log(int)
int-- // itt meg csökkent :O
console.log(int)

int += 2 // a '+=' cuccal annyit adok hozzá amennyit akartok, itt kettőt adtam hozzá
console.log(int)
int -= 100 // *macskaköröm* csak '-=' -vel
console.log(int)

// tömb.
let tomb = ["messi", "suarez", "neymar"] // letrehozunk egy tombot
console.log(tomb)   //kilogoljuk
tomb = [{nev: "messi", mezszam: 10}, {nev: "suarez", mezszam: 9}, {nev: "neymar", mezszam: 11}] //a tomb elemei/ertekei objektumok lesznek, megvaltoztatjuk oket
console.log(tomb)   //kiiratom a megvaltoztatott tombot
console.log(tomb[0], tomb[1], tomb[2]) //igy is lehet
console.log(tomb[1]) //itt meg kulon kulon kiiriatom a megadott indexen levo elemet
console.log(tomb[2]) //macskaköröm

console.log(tomb[0].nev) //kiiratom a megadott indexnek a megadott erteket

tomb.push(objektum) //hozzaadunk a tombhoz egy uj elemet, egy uj objektumot
console.log(tomb[3])
console.log(tomb)


tomb.push(int) //itt az int valtozot adom hozza a tombhoz

console.log(tomb[4])
console.log(tomb)

// constos cuccok

const stringes_ize = "kjhklkh" //deklarálunk egy const valtozot.
console.log(stringes_ize)
//stringes_ize = "skibidi"    //NEM LEHET VALTOZTATNI MERT CONST!!!!!!!!44!!
console.log(stringes_ize)

const allatok = {allat: "kutya", ugat: true}    //letrehozok egy uj objektumot
console.log(stringes_ize)
allatok.ugat = false  //NEM LEHEEET MEGVAALTITIATINnti (mert CONST).
console.log(stringes_ize)

const allatok2 = [{allat: "cica", nyavog: true}] // letrehozok egy tombot azon belul egy objektumot
console.log(allatok2)
allatok2.push({allat: "elefánt", nyavog: "hell naah"}) // megpróbálhatsz hozzáadni egy másik objektumot (vagy egy elemet de igazából mindegy, mert amúgy az objektum az uj elem úgyhogy igazából tökmindegy), DE NEM ÉRTED HOGY NEM LEHET ๋࣭ ⭑๋࣭ ⭑BASSZUSKULCS๋๋࣭࣭ ⭑ ⭑ ???!?!!  Azért, mert ez egy const változó.
console.log(allatok2)


// ๋࣭ ⭑๋࣭ 2. óra ๋࣭ ⭑๋࣭ 

//függvények

function fuggveny(){
    console.log("kiír valamit.")  //ez egy függvény ami kiír valamit.
}

fuggveny() // meghívjuk a függvényt.

function fuggveny2(param1, param2){ //ez egy függvény aminek két bemeneti értéke van, param1, param2  
    eredmeny = param1 + param2  // az eredmeny valtozo egyenlo lesz a ket paraméter összegével.
    return eredmeny    // returnöljük az eredményt.
}

console.log(fuggveny2(1, 2)) //logoljuk

//elágazások

let kor = 19 
if(kor < 18){   // ha a kor valtozo kisebb mint 18
    console.log("fiatal vagy")  //akkor ez tortenik (kilogoljuk h "fiatal vagy.")
}
else{
    console.log("nem vagy fiatal") //ha meg nem kisebb azaz else a cucc akkor meg ez tortenik (kilogoljuk h "nem vagy fiatal")
}

let pontszam = 45   
if(pontszam < 41){  //ugyanaz csak pontszam valtozoval
    console.log("karó") //yes
}
else if (pontszam < 55 & pontszam >= 41) {  //itt mar bejon az "else if" elagazas ami egy uj if-es feltetel cuccot hoz letre
    console.log("kettes") //logoljuk
} else { 
    console.log("ötös c:")  //ELSE ez törtenik: ötös c:
}

// itt a logikai ertekekkel szorakoztunk egy kicsit !igaz, igaz, false !true meg ilyenek, vilagos!
const igaz = false  
if (!igaz){
    console.log("igaz")
}

// itt a logikai ertekekkel szorakoztunk egy kicsit !igaz, igaz, false !true meg ilyenek, vilagos! (csak fügvénnyel!4!!)
function logikaiErtek(){    
    return true
}

if (!logikaiErtek()){       
    console.log("igazzal tér vissza")
}

//CIKLUSOK

//basic ๋࣭ ⭑๋࣭ ⭑for๋࣭ ⭑๋࣭ ⭑ ciklus
for (let i = 0; i < 5; i++){  
    console.log(i)
}


const szogletes = ["első sztring", "második", "3."]     // letrehoztunk egy szogletes tombot

//basic ๋࣭ ⭑๋࣭ ⭑for in๋࣭ ⭑๋࣭ ⭑
for (const i in szogletes){  //a for in kulcsok alapján iterál
    console.log(i, szogletes[i])
}

//basic ๋࣭ ⭑๋࣭ ⭑for of๋࣭ ⭑๋࣭ ⭑
for (const i of szogletes){ //a for of értékek alapján iterál
    console.log(i)
}

//ez meg egy for ciklus ami addig fut ameddig el nem fogy a tomb, azaz a lista vegeig. JA.
for (let i = 0; i < szogletes.length; i++){
    console.log(i, szogletes[i])
}

//๋࣭ ⭑๋࣭ ⭑๋࣭ ⭑๋࣭ ⭑๋࣭ ⭑๋࣭ ⭑๋࣭ ⭑๋࣭ ⭑๋࣭ ⭑๋࣭ ⭑๋࣭ ⭑๋࣭ ⭑๋࣭ ⭑๋࣭ ⭑๋࣭ ⭑๋࣭ ⭑๋࣭ ⭑๋࣭ ⭑๋࣭ ⭑๋࣭ ⭑๋࣭ ⭑๋࣭ ⭑VÉGE.