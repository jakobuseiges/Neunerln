let test = document.getElementById("test");
let _playedGames = 400;
let _wonGames = 3;

playedGames.innerText += ' ' + _playedGames;
wonGames.innerText += ' ' + _wonGames;
quote.innerText += ' ' + _wonGames/_playedGames * 100 + '%';
