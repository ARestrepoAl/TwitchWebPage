var gamerName = prompt('Como te llaman los gamers?');
var gamerName
if(!gamerName)
{
    gamerName = 'personita'
}

alert('Te doy la bienvenida ' + gamerName + ' a esta nueva comunidad de gamers!!!');

function saludar() {
    var message = 'Un gusto conocerte ' + gamerName + '!!!'
    return message;
}