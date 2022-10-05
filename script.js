//get the html elements
let gameLetter = document.querySelector('.game-letter')
let gameKeyboard = document.querySelector('.game-keyboard')
let image = document.getElementById('game-img')
let start = document.querySelector('.start-button')
let reset = document.querySelector('.reset-button')
let remaintesies = document.querySelector('.teries-remain')
let gameHint = document.querySelector('.game-hint')

// varibles 
let tries = 6;
let word;
let text;
let letter ;


//the game array
// let words= ['Rachel Karen Green','Monica Geller','Ross Geller','Ursula Buffay','Chandler Muriel Bing']
// let words = ['test']
let hintword;
let wordPairs = [
    {hint: 'Starts with R', name: 'Racel Karen Green'},
    {hint: 'Starts with M', name: 'Monica Geller'},
    {hint: 'Starts with R and G', name: 'Ross Geller'},
]

//make the button start cliklable
// start.addEventListener('click', startthegame)

//function for the click start button
function startthegame (){
    image.style.backgroundImage = "url('img/guitar1.png')"
    let randNum = Math.floor(Math.random() * wordPairs.length) 
    word = wordPairs[randNum].name;
    console.log(word);
    console.log(wordPairs[0][1])
    gameHint.innerHTML=wordPairs[randNum].hint

    text = word.split(' ')
    // console.log(text)
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

// hintword=wordPairs[0][0]

//make the button keyboard key cliklable
gameKeyboard.addEventListener('click', handleClick)

let totalLettersAdded = 0
//function for the click keyboard button
function handleClick(event) {
    console.log(event.target.innerText)
    let userLetter = event.target.innerText;
    // if(text.includes(userLetter)){
        
    // rmImage.toString();
    
    
    console.log('text,', text)
    let lettersAdded = 0
    text.forEach(function(element, index) {
        //   console.log(element);
        for (let i=0 ; i<element.length ; i++)  {
            letter = document.getElementById(`${index}-${i}`);
            // console.log(text[i])
            // const pos = text.indexOf(letter);
            // if(pos < 0){
                // }
                
                if (element[i].toUpperCase() === userLetter.toUpperCase()){
                    console.log()
                    letter.innerText = userLetter;
                    lettersAdded++
                    totalLettersAdded++
                    
                }
            }
        })
        
        if (lettersAdded == 0){
            tries--
            if (tries < 0) {
                tries =  0
            }else if (tries == 0){
                console.log("inside tries == 0")
                // Get the modal
                let modal = document.getElementById("lossModal");

                modal.style.display = "block";
                // Get the <span> element that closes the modal
                const span = document.getElementsByClassName("close")[0];
                
                
                
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
            remaintesies.innerText="You have this many chances left: " + tries
            // console.log("You have this many chances left: " + tries)
            }
            rmImage(tries)
            
        }

        console.log("Im here ")
        console.log("totallettersadded " + totalLettersAdded)
        console.log("length " + text.toString().length)
        if (totalLettersAdded == text.toString().length){
            console.log("Im here 2 ")

            // Get the modal
            let modal2 = document.getElementById("winModal");

            modal2.style.display = "block";
            // Get the <span> element that closes the modal
            const span = document.getElementsByClassName("close2")[0];
            
            
            // When the user clicks on <span> (x), close the modal
            span.onclick = function() {
                modal2.style.display = "none";
            }
            
            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
                if (event.target == modal2) {
                    modal2.style.display = "none";
                }
            }

        }
        
     
         
        //if (totalLettersAdded == // total length of the name)
        // user wins
}  
    
//function for the imag switch basedon the tries numbers
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
                             


//make the button reset cliklable                               
reset.addEventListener('click', resetthegame)
                                
//function for the click reset button                               
function resetthegame (){
 gameLetter.innerHTML = ''
 gameHint.innerHTML= ' '
 remaintesies.innerText= ''
 tries = 6;
 totalLettersAdded = 0;
  startthegame()
}
                                




