//get the html elements
let tries = 7;
let gameLetter = document.querySelector('.game-letter')
let gameKeyboard = document.querySelector('.game-keyboard')
let image = document.getElementById('game-img')
let start = document.querySelector('.start-button')

//[div,div,div]

//the words for the game
let words= ['Rachel Karen Green','Monica Geller','Ross Geller','Ursula Buffay','Chandler Muriel Bing']

start.addEventListener('click', startplay)
let word;
let text;
function startplay (){
    image.style.backgroundImage = "url('img/guitar1.png')"
    word = words[Math.floor(Math.random() * words.length)];
    console.log(word);
    text = word.split(' ')
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
}



// console.log(text)

  
  
gameKeyboard.addEventListener('click', handleClick)

    
  
function handleClick(event) {
    console.log(event.target.innerText)
    let userLetter = event.target.innerText;
    // if(text.includes(userLetter)){
    // find the div that has the same index as that letter and change the innerHTML to match it\
    let letter ;
    tries--
    // rmImage.toString();
   if (tries == 0){
    // console.log("hudhuhu")
   // Get the modal
            let modal = document.getElementById("myModal");

            // Get the <span> element that closes the modal
            const span = document.getElementsByClassName("close")[0];

            // document.getElementById("myModal").style.display = "block";

            modal.style.display = "block";
            
            // When the user clicks on <span> (x), close the modal
            span.onclick = function() {
            modal.style.display = "none";
            }

            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
            }
   }else{
    console.log("hds jdh")
   }
    
    // if (tries == 0){
    //     console.log("game is over")
    // }

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
            
        }
      }
    })
}
      
    
function rmImage(tries){
    console.log('tries',tries)
    switch(tries.toString()){
        case "5":
            image.style.backgroundImage = "url('img/guitar2.png')";
        break;
        case "4":
            image.style.backgroundImage = "url('img/guitar3.png')";
        break;
        case "3":
            image.style.backgroundImage = "url('img/guitar4.png')";
        break;
        case "2":
            image.style.backgroundImage = "url('img/guitar5.png')";
        break;
        case "1":
            image.style.backgroundImage = "url('img/guitar6.png')";
        break;
        case "0":
            image.style.backgroundImage = "url('img/guitar7.png')";
        break;
        // default:
        //     image.style.backgroundImage = "url('img/guitar1.png')";
        // break;
    }
};









