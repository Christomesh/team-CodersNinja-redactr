function startApp() {
    // Your entire app should not necessarily be coded inside this 
    // single function (though there's no penalty for that), 
    // so create and use/call additional functions from here
  
    // pls remove the below and make some magic in here!
    console.log('make magic in here!');
  
    const header = document.querySelector('h2');
    if(header) {
      header.textContent = 'make some magic here!!';
    }
  };

const comment = document.getElementById("text")
const redactBtn = document.getElementById("btn-submit")
const wordsToRedact = document.getElementById("words-to-scamble")
const redactCharacter = document.getElementById("scramble-replacement")
const output = document.getElementById("output")

redactBtn.addEventListener("click", (e) => {
  let char = "*"
  e.preventDefault()
  if (comment.value.length < 100){
    alert("comment too short!")
    return;
  }
  if (!wordsToRedact) {
    alert("Please provide word(s) to redact")
    return;
  }

  if (redactCharacter.value.length > 1){
    alert("Scramble replacement must be a single character")
    return;
  } else if (redactCharacter.value.length == 1) {
    char = redactCharacter.value;    
  }
  // alert("Done!")
  let result = redactr(comment.value, wordsToRedact.value, char);
  output.innerText = result
  
})

function redactr(comment, wordsToRedact, redactCharacter) {
    const wordsArr = wordsToRedact.split(" ")
    .map(word => word.toLowerCase())

    return comment.split(" ")
    .map(word => {
        if (wordsArr.indexOf(word.toLowerCase()) > -1) {
            let newWord = ""
            for (let i = 0; i < word.length; i++) {
                newWord += redactCharacter
            }
            return newWord
        }
        return word
    })
    .join(" ")
}
  
  // ======= DO NOT EDIT ============== //
  export default startApp;
  // ======= EEND DO NOT EDIT ========= //