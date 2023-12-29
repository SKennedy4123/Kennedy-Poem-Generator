function aiPoem(response){
  new Typewriter("#new-poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: "",
  });  
}

function generatePoem(event) {
  event.preventDefault();

let apiKey = "87fd924aft47ob31f6228617ba830bdb";
let userInput = document.querySelector("#user-input");
let apiContext = `Generate a short poem about ${userInput.value}`;
let apiPrompt = "You are an expert poem writer. Please create one poem no longer than 4 lines and include a title at the top. Give your response in HTML format that separates each poem text line. Do not display it as one paragraph or run-on sentence. Do not erase or re-do the poem once it has been created. Make the title only 4px larger than the poem font-size. Sign the poem with `~SheCodes AI` at the bottom.";
apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${apiPrompt}&context=${apiContext}&key=${apiKey}`;

axios.get(apiUrl).then(aiPoem);


}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
