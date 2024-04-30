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

})()
//cours_es6

