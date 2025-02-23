addEventListener("DOMContentLoaded", async function(){
    const urlparam = new URLSearchParams(window.location.search)
    const songId = urlparam.get('id')
    console.log(songId)

    //const response = await fetch("http://localhost:3000/api/songs/" + songId)
    const response = await fetch("https://sly-alive-visor.glitch.me/api/songs" + songId)
    const song = await response.json()
    console.log(song)

    let heading = ""
    heading += `${song.title}`

    document.querySelector("h1").innerHTML = heading

    let html = ""
    html += `
        <h2>Artist - ${song.artist}</h2>
        <p>Popularity - ${song.popularity}</p>
        <p>Release Date - ${song.releaseDate}</p>
    `
    document.querySelector("div").innerHTML = html
})