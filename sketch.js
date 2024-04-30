

let intro, punchline, theme;
let joke_api = 'https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart';


async function getJoke(){
  let data = await fetch (joke_api);
  let j_data = await data.json();
  intro = j_data.setup;
  punchline = j_data.delivery;
  theme = j_data.category;

}


function setup() {
  
  createCanvas(400, 400);
  setInterval(getJoke, 5000);
  text(CENTER);

}

function draw() {
  background(225);
  text(intro,30,200,);
  text(punchline,mouseX,mouseY);
  text(theme,150,30)
  textSize(15);
  fill(random(0,225),random(0,225),random(0,225));
  
  
}




