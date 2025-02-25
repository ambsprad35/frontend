addEventListener("DOMContentLoaded", async function(){
    document.querySelector("#updateBtn").addEventListener("click", updateSong)
    const urlparam = new URLSearchParams(window.location.search)
    const songId = urlparam.get('id')

    //const response = await fetch("http://localhost:3000/api/songs/" + songId)
    //const response = await fetch("https://sly-alive-visor.glitch.me/api/songs")
    const response = await fetch("https://fancy-extreme-atmosphere.glitch.me/api/songs/" + songId)
    if(response.ok){
        let song =  await response.json()
        document.querySelector("#songId").value = song._id
        document.querySelector("#title").value = song.title
        document.querySelector("#artist").value = song.artist
        document.querySelector("#released").value = song.releaseDate.substring(0,10)
        document.querySelector("#popularity").value = song.popularity
        document.querySelector("#genre").value = song.genre
    }

    
})

async function updateSong(){
    const songID = document.querySelector("#songId").value

    const song = {
        _id: document.querySelector("#songId").value,
        title: document.querySelector("#title").value,
        artist: document.querySelector("#artist").value,
        releaseDate: document.querySelector("#released").value,
        popularity: document.querySelector("#popularity").value,
        genre: document.querySelector("#genre").value ? document.querySelector("#genre").value.split(",") : []
    }

    const response = await fetch("https://fancy-extreme-atmosphere.glitch.me/api/songs/" + songID,{
        method: "PUT",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(song)

    })

    if(response.ok){
        alert("Updated Song")
    }
    else{
        document.querySelector("#error").innerHTML = "Cannot Update Song"
    }
}
