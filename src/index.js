
function displayPoem (response){
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 15,
        cursor: "",
      });

}



function generatePoem(event) {
    event.preventDefault(); 
    
    let instructionsInput = document.querySelector("#user-instructions")
    
    let apiKey = "cfab87o4ce22c3f3ec5eaaftfbfbdc0e"; 
    let prompt = `User instructions: Generate a french poem about flowers ${instructionsInput.value}`; 
    let context = 
    "You are a romantic poem expert and love to write short poem. You mission is to generate a 4 line poem in basic HTML and separate each line with <br/>. Do not show the HTML sign.  Make sure to follow the user instructions. Do not included a title to the poem. Sign the poem with 'SheCodes AI' <strong> element at the end of the poem</strong>"; 

    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`; 

    console.log(`Generating poem`);
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);


    axios.get(apiUrl).then(displayPoem);
}
    

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
