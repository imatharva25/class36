class Form{


constructor(){



}

display(){
var title =createElement('h2');
title.html("Crazy Roadsters");
title.position(130,20);

var input=createInput("Name");
input.position(130,160);

var button=createButton("play");
button.position(250,200);

button.mousePressed(function(){
    input.hide();
    button.hide();
    var name=input.value();

    var greeting= createElement('h3');
    greeting.html("Hello "+name);
    greeting.position(130,160);

    playerCount+=1
    player.updateCount(playerCount);
    player.update(name);
    

})




}
}