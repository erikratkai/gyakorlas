//const element = document.createElement("div")
//element.innerText = "asdasdbahibhfjea."
//document.body.appendChild(element)
//
//const tablazat = document.createElement("table")
//document.body.appendChild(tablazat)
//
//const fejlec = document.createElement("thead")
//tablazat.appendChild(fejlec)
//
//const sor = document.createElement("tr")
//fejlec.appendChild(sor)
//
//const cella1 = document.createElement("th")
//cella1.innerHTML = "cella1"
//sor.appendChild(cella1)
//
//const cella2 = document.createElement("th")
//cella2.innerHTML = "cella2"
//sor.appendChild(cella2)
//
//cella2.colSpan = 2
//cella1.rowSpan = 3
//
//const form = document.createElement("form")
//form.id = "form"
//document.body.appendChild(form)
//
//const label = document.createElement("label")
//label.innerHTML = "ez egy label"
//label.htmlFor = "id1"
//form.appendChild(label)
//form.appendChild(document.createElement("br"))
//
//const input = document.createElement("input")
//input.id = "id1"
//input.name = "id1"
//form.appendChild(input)
//
//const div = document.createElement("div")
//div.classList.add("osztaj")
//div.innerText = "asdasdbahibhfjea."
//document.body.appendChild(div)
//
//const form2 = document.createElement("form2")
//form2.id = "form2"
//document.body.appendChild(form2)
//
//const div2 = document.createElement("div")
//div2.classList.add("osztaj")
//div2.innerText = "asdasdbahibhfjea."
//form2.appendChild(div2)
//
//const div3 = document.createElement("div")
//div3.classList.add("osztaj")
//div3.innerText = "asdasdbahibhfjea."
//form2.appendChild(div3)
//
//const div4 = document.createElement("div")
//div4.classList.add("osztaj")
//div4.innerText = "asdasdbahibhfjea."
//form2.appendChild(div4)
//
//const div5 = document.createElement("div")
//div5.classList.add("osztaj")
//div5.innerText = "asdasdbahibhfjea."
//form2.appendChild(div5)
//
//const element2 = document.getElementById("form2")
//
//const fields = element2.querySelectorAll(".osztaj")
//
//const elsoField = element2.querySelector(".osztaj")
//
//
//const formqueryize = document.body.querySelector("#form2")
//console.log(fields)
//console.log(element2)
//console.log(elsoField)
//console.log(formqueryize)
const div = document.createElement("div")
div.innerHTML = "barmi"
document.body.appendChild(div)
div.addEventListener("click", function(e){
    const valtozo = e.currentTarget
    valtozo.classList.add("nev")
})  //addEventListener lenyege ilyen esemenymeghatarozas pl ha raklikkelsz mit csinaljon meg ilyenek.

const urlap = document.createElement("form")
urlap.id = "form"
document.body.appendChild(urlap)
const label = document.createElement("label")
label.innerHTML = "vezeteknev"
label.htmlFor = "vezeteknev"
urlap.appendChild(label)
const input = document.createElement("input")
input.id = "vezeteknev"
input.name = "vezeteknev"
urlap.appendChild(input)
const gomb = document.createElement("button")
gomb.innerHTML = "elkuld"
urlap.appendChild(gomb)

urlap.addEventListener("submit", function(e){
    e.preventDefault()
    alert("sikeresen elkuldted")
})