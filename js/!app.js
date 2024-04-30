(()=>{
console.log("hello javascript") 
const version = 8.2
let nom = "javascript"
const langs = ["html","css","js",true]
console.table(langs)
const User = {
    nom : "MODZINU",
    prenom : "Stephane",
    age : 19,
    ville : "Lomé",
    pays : "TOGO"
}
//console.log(User)
console.table(`${User.nom} : ${User.prenom}`)
console.log(langs.length)
/*for (let i = 0;langs.length < 4; i++)
    console.log(langs[i])*/
let i = 0;
while (i< langs.length){
    console.log(`index ${i} : ${langs[i]}`)
    i++
}
/*for(let index in User){
    console.log(`${index} : ${User[index]}`)
}*/
langs.forEach(element => {
    console.log(element)
});
let prix = 55 //ht
let taxe = 5.5 //t
console.log(`le prix ttc est de ${prix * taxe / 100 +prix}`)
  
const product=[
    {name: "car", price: 6000},
    {name: "Bike", price: 150},
    {name: "phone", price: 700},
    {name: "Watch", price: 200},
    {name: "pen", price: 8},
    {name: "bag", price: 50},
];
console.log(Object.values(product[1]))
console.log(product[1])
product.forEach(element => {
    console.log(element.name+" "+element.price)
});
for(let data of product){
    console.log(data.name)
}


const filterRedItems = product.filter((row) => row.price  < 100)
//ici il va m'afficher pour les prix inferieur a 100 grace a la ligne d'en haut.
console.table(filterRedItems)

const personne_1 = {
    nom : "Bernee Lee",
    prenom : "Tim"
}
const personne_2 = {
    nom : "Doe",
    prenom : "John"
}
const people = []

people.push (personne_1,personne_2)
console.table(people)
console.log(people[0])
for (let data of people){
    console.table(people[0]+" "+people[1])
}
people.forEach((element) => {
    console.log(element.nom+' '+element.prenom)
});
})()
//cours_es6

