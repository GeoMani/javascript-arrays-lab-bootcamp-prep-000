const app = "I don't do much."

function Arrays() {
  beforeEach(function() {
    window.kittens = ["Milo", "Otis", "Garfield"];
  })
}

function kittens () {
  var kittens = ["Milo", "Otis", "Garfield"];
}

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(name) {
  [...kittens, name];
  return kittens;
}

function prependKitten(name) {
  [name, ...kittens];
  return kittens;
}