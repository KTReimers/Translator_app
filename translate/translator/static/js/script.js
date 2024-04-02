console.log("JS is loaded")
async function translator(event){
    event.preventDefault()
    let input = document.querySelector("#input")
    console.log(input)
    let convo = document.querySelector(".convo")
    let response = await fetch(`http://localhost:8000/translate`)
    let res = await(response.json())
    console.log(res)

    convo.innerHTML += `<p class="userInput bubble">${input.value}</p>
        <p class="response bubble">${res.response}</p>`
        input.value="";
}