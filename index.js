// Array
cats = ["Milo", "Otis", "Garfield"];
function cats(){
    cats.length 
}
function destructivelyAppendCat(){
cats.push("Ralph");
}
function destructivelyPrependCat(){
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(){
    cats.pop("Garfield");
}
function destructivelyRemoveFirstCat(){
    cats.shift("Bob");
}
function appendCat(){
    return cats.splice(0, 3, "Broom");
}
function prependCat(){
    return prependCat(0, 4)
}
function removeLastCat(){
    return removeLastCat.splice(4, )
}
function removeFirstCat(){
    return removeFirstCat.splice()
}