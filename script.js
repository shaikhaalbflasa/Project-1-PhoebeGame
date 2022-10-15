//get the html elements
let gameLetter = document.querySelector('.game-letter')
let gameKeyboard = document.querySelector('.game-keyboard')
let key = document.querySelector('.key')
let image = document.getElementById('game-img')
let start = document.querySelector('.start-button')
let resetbutton1 = document.querySelector('.reset-button1')
let resetbutton2 = document.querySelector('.reset-button2')
let remaintesies = document.querySelector('.teries-remain')
let gameHint = document.querySelector('.game-hint')
let buttons = document.querySelectorAll('.key')


// varibles 
let tries = 6;
let word;
let text;
let letter ;
let totalLettersAdded = 0

let sound= new Audio('sound/mixkit-short-guitar-strum-2318.wav')


// ---function for the ininstructions button-------
function instructions(){
    document.getElementById("myModalforinstructions").style.display="block"
}
function closetheinstructions(){ 
    document.getElementById("myModalforinstructions").style.display="none"  
}

//-----the game obj-----
let words = [
    {hint: 'Characters Starts with R', name: 'Rachel Karen Green'},
    {hint: 'Characters Starts with M', name: 'Monica Geller'},
    {hint: 'Characters Starts with P ', name: 'Phoebe Buffay'},
    {hint: 'Characters Starts with U ', name: 'Ursula Buffay'},
    {hint: 'Characters Starts with J ', name: 'Joey Tribbiani'},
    {hint: 'Characters Starts with C ', name: 'Chandler Muriel Bing'},
    {hint: 'Characters Starts with G', name: 'Gina Tribbiani'},
    {hint: 'Characters Starts with R ', name: 'Ross Geller'},
    {hint: 'Characters Starts with H ', name: 'Howard'},
    {hint: 'Characters Starts with Z ', name: 'Zach Miller'},
    {hint: 'Characters Starts with M ', name: 'Michael Tribbiani'},
]


console.log(document.querySelector('body'))
// document.querySelector('body').addEventListener('DOMContentLoaded', startthegame)
// let body= document.querySelector('body')
// body= addEventListener('click', startthegame)

// startthegame()

//-------function for the click start button------
function startthegame (){
    console.log('start ran!')
    //show the imag when start the game
    image.style.backgroundImage = "url('img/guitar1.png')"
    //randon the obj 
    let randNum = Math.floor(Math.random() * words.length) 
    //take the name only from the random obj
    word = words[randNum].name;
//     console.log(word);
    gameHint.innerHTML="Hint: "+ words[randNum].hint

//     text = word.split(' ')
    console.log(text)
    //make the -- for the use click letter
    text.forEach(function(name,index) {
        for (let i = 0; i < name.length; i++) {
            let newSpot = document.createElement('span')
            newSpot.id = `${index}-${i}`
            newSpot.innerHTML = ' _ '
            gameLetter.appendChild(newSpot)
        }
        //for the space btween 2 words
        let emptySpot = document.createElement('span')
        emptySpot.innerHTML = '&nbsp;&nbsp;'
        gameLetter.appendChild(emptySpot)
    })
}

//add addEventListener click to the buttons
buttons.forEach(btn => btn.addEventListener('click', handleClick))

//------function for the click keyboard button------
function handleClick(event) {
    // console.log(event.target.innerText)
    let userLetter = event.target.innerText;
    event.target.style.backgroundImage = "url('img/guitar1.png')";
    
    console.log('text,', text)
    let lettersAdded = 0;
    text.forEach(function(element, index) {
        //   console.log(element);
        for (let i=0 ; i<element.length ; i++)  {
            //to compere between the id  for the - and the use letter
            letter = document.getElementById(`${index}-${i}`);
            
           //to check it the same in the text 
            if (element[i].toUpperCase() === userLetter.toUpperCase()){
                letter.innerText = userLetter;
                lettersAdded++
                totalLettersAdded++
                // numberpush.push(userLetter)
            }  
        }
        })
       
        if (lettersAdded == 0){
            tries--
            if (tries < 0) {
                tries =  0

            }else if (tries == 0){
                // Get the modal
                let modal2 = document.getElementById("lossModal");
                modal2.style.display = "block";
                // Get the <span> element that closes the modal
                const span = document.getElementsByClassName("close2")[0];


                //When the user clicks reset button
                resetbutton1.onclick=function(){
                    gameLetter.innerHTML = ''
                    gameHint.innerHTML= ' '
                   remaintesies.innerText= ''
                    tries = 6;
                   totalLettersAdded = 0;
                   for(let i = 0 ; i < document.getElementsByTagName('button').length ; i++){
                    document.getElementsByTagName('button')[i].style = '';
                   }
                  startthegame()
                  
                   
    
                }
                
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
            }else{
            remaintesies.innerText="You have this many chances left: " + tries
            // console.log("You have this many chances left: " + tries)
            }
            rmImage(tries)
            
        }
        // console.log("totallettersadded " + totalLettersAdded)
        // console.log("total "+ text.join("").length)

        //to check if the user inerr same as the leght of the text it win and i remove the spit from tha text
     if (totalLettersAdded == text.join("").length){
        
            // Get the modal
            let modal3 = document.getElementById("winModal");
            modal3.style.display = "block";
            // Get the <span> element that closes the modal
            const span = document.getElementsByClassName("close3")[0];

            //When the user clicks reset button
            resetbutton2.onclick=function(){
                gameLetter.innerHTML = ''
                gameHint.innerHTML= ' '
               remaintesies.innerText= ''
                tries = 6;
               totalLettersAdded = 0;
               for(let i = 0 ; i < document.getElementsByTagName('button').length ; i++){
                document.getElementsByTagName('button')[i].style = '';
               }
              startthegame()

            }
            // When the user clicks on <span> (x), close the modal
            span.onclick = function() {
                modal3.style.display = "none";
            }
            
            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
                if (event.target == modal3) {
                    modal3.style.display = "none";
                }
            }

    }

  /// to click ones only 
    event.target.removeEventListener('click', handleClick)
            
}  


//----function for the imag switch basedon the tries numbers-----
function rmImage(tries){
        // console.log('tries',tries)
        switch(tries.toString()){
        case "5":
        image.style.backgroundImage = "url('img/guitar2.png')";
        sound.play()
        break;
        case "4":
        image.style.backgroundImage = "url('img/guitar3.png')";
        sound.play()
        break;
        case "3":
        image.style.backgroundImage = "url('img/guitar4.png')";
        sound.play()
        break;
        case "2":
        image.style.backgroundImage = "url('img/guitar5.png')";
        sound.play()
        break;
        case "1":
        image.style.backgroundImage = "url('img/guitar6.png')";
        sound.play()
        break;
        case "0":
        image.style.backgroundImage = "url('img/guitar7.png')";
        sound.play()
        break;
        // default:
       //     image.style.backgroundImage = "url('img/guitar1.png')";
       // break;
    }  
};
                            



