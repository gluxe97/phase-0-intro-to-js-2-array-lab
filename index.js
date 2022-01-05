// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(Simba) {
    return cats.push(Simba);
    };
 destructivelyAppendCat("Simba");

function destructivelyPrependCat(Tom) {
    return cats.unshift(Tom);
};
destructivelyPrependCat("Tom");

function destructivelyRemoveLastCat() {
    return cats.pop();
};
destructivelyRemoveLastCat();

function destructivelyRemoveFirstCat() {
    return cats.shift();
};
destructivelyRemoveFirstCat();

function appendCat(Jeff) {
    return [...cats, Jeff];
};
appendCat("Jeff");

function prependCat(Tommy) {
    return [Tommy, ...cats];
};
prependCat("Tommy");

function removeLastCat ( ) {
    return cats.slice(0,2)
};
removeLastCat();

function removeFirstCat () {
    return cats.slice(1)
}
removeFirstCat();


