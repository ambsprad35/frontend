// we are going ot make an event listener.. 
// it will will trigger when the DOM is loaded (aka - upon visting the webpage)
addEventListener("DOMContentLoaded", async function () {
    const response = await fetch("http://localhost:3000/api/songs")
    const songs = await response.json()

    let html = ""
    for (let song of songs){
        html+=`<li>${song.title} - ${song.artist}</li>`
    }

    document.querySelector("#addedsong").innerHTML = html
    
})