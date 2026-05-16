var arr1 = ["hello", "howdy", "greetings!"], arr2 = ["d", "e", "f"], arr3 = ["g", "h", "i"];

function showRandomFrom(chosenArray){
  document.getElementsByClassName("greeting")[0].innerHTML = chosenArray[Math.floor(Math.random() * chosenArray.length)];
}

// This is in lieu of figuring out either Tracery (which hasn't been updated since like 2013) or trying to recreate Tracery in Inky. I think doing this I could have multiple .js files with different text. Still not sure about how to use this to construct varying sentences, however.