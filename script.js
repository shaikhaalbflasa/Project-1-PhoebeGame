//get the html elements
let tries = 7;
let gameLetter = document.querySelector('.game-letter')
let gameKeyboard = document.querySelector('.game-keyboard')
let image = document.getElementById('game-img')
let start = document.querySelector('.start-button')

//[div,div,div]

//the words for the game
let words= ['Rachel Karen Green','Monica Geller','Ross Geller','Ursula Buffay','Chandler Muriel Bing']

// start.addEventListener('click', startplay)
// let word;
// let text;



image.style.backgroundImage = "url('./img/guitar1.png')"
let word = words[Math.floor(Math.random() * words.length)];
console.log(word);



let text = word.split(' ')
console.log(text)
text.forEach(function(name,index) {
    for (let i = 0; i < name.length; i++) {
      let newSpot = document.createElement('span')
      newSpot.id = `${index}-${i}`
      newSpot.innerHTML = ' _ '
      gameLetter.appendChild(newSpot)
    }
    // let emptySpot = document.createElement('br')
    let emptySpot = document.createElement('span')
    emptySpot.innerHTML = '&nbsp;&nbsp;&nbsp;'
    gameLetter.appendChild(emptySpot)

})
  
  
gameKeyboard.addEventListener('click', handleClick)

    
  
function handleClick(event) {
    console.log(event.target.innerText)
    let userLetter = event.target.innerText;
    // if(text.includes(userLetter)){
    // find the div that has the same index as that letter and change the innerHTML to match it\
    let letter ;
    

    tries--
    
    if (tries == 0){
        console.log("game is over")
    }

    text.forEach(function(element, index) {
        //   console.log(element);
            for (let i=0 ; i<element.length ; i++)  {
            letter = document.getElementById(`${index}-${i}`);
        // console.log(text[i])
        const pos = text.indexOf(letter);
        if(pos < 0){
        }
            // rmImage()
        if (element[i].toUpperCase() === userLetter.toUpperCase()){
           letter.innerText = userLetter;
           
        }else{
            rmImage(tries)
            console.log("not working this")
        }
      }
    })
}
      
    
function rmImage(tries){
    console.log('tries',tries)
    switch(tries.toString()){
        case "1":
            image.style.backgroundImage = "url('./img/guitar7.png')";
        break;
        case "2":
            image.style.backgroundImage = "url('./img/guitar6.png')";
        break;
        case "3":
            image.style.backgroundImage = "url('./img/guitar5.png')";
        break;
        case "4":
            image.style.backgroundImage = "url('./img/guitar4.png')";
        break;
        case "5":
            image.style.backgroundImage = "url('./img/guitar3.png')";
        break;
        case "6":
            image.style.backgroundImage = "url('./img/guitar2.png')";
        break;
        default:
            image.style.backgroundImage = "url('./img/guitar1.png')";
            break;
    }
};









