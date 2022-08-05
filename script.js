


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}



getRandomGame("header1", "name1")
getRandomGame("header2", "name2")



function getRandomGame(imgName, textName) {

    var randomPage = getRandomInt(100)
    console.log(randomPage)

    fetch('https://api.rawg.io/api/games?key=47acbe9f042b498c9fb84d51d8987f72&page=' + randomPage)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            var game = getGameFromJSON(data)
            console.log(game)


            var img = document.createElement("img");
            img.src = game.background_image;
            var src = document.getElementById(imgName);
            src.appendChild(img);

            document.getElementById(textName).innerHTML = game.name
        });

    //return resultGame
}

function getGameFromJSON(data) {
    var length = data.results.length - 1;
    console.log(length);

    return data.results[getRandomInt(length)]
}