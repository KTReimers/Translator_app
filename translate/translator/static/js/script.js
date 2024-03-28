console.log("JS is loaded")
function translator(event){
    event.preventDefault()
    let input = document.querySelector("#input")
    console.log(input)
    let convo = document.querySelector(".convo")

    convo.innerHTML += `<p class="userInput bubble">${input.value}</p>
        <p class="response bubble">Response placeholder</p>`
        input.value="";
}