//lowercase text to emojis

let encode = [];
let translation = {};
let add;
let addon;
let emojis;
let string; 

function setup() {
  createCanvas(400, 400);
  background('pink');
  textBox = createInput('');
  textBox.input(translateCode);
}

function translateCode() {
  translation["a"] = '( ͡° ͜ʖ ͡°) ';
  translation["b"] = "ʕ•ᴥ•ʔ";
  translation["c"] = "ಠ_ಠ";
  translation["d"] = "(ง'̀-'́)ง";
  translation["e"] = "﴾͡๏̯͡๏﴿";
  translation["f"] = "(づ￣ ³￣)づ";
  translation["g"] = "◉_◉";
  translation["h"] = "♥‿♥";
  translation["i"] = "(._.)";
  translation["j"] = "( :l )";
  translation["k"] = " ( .-. )";
  translation["l"] = "༼ʘ̚ل͜ʘ̚༽";
  translation["m"] = "\ (•◡•) /";
  translation["n"] = "ಥ_ಥ";
  translation["o"] = "╚(ಠ_ಠ)=┐";
  translation["p"] = "(；一_一)";
  translation["q"] = "^̮^";
  translation["r"] = "=U";
  translation["s"] = "☼.☼";
  translation["t"] = ";0";
  translation["u"] = ":p";
  translation['v'] = ";/";
  translation["w"] = "(✿´‿`)";
  translation["x"] = "Ƹ̵̡Ӝ̵̨̄Ʒ";
  translation["y"] = "ლ,ᔑ•ﺪ͟͠•ᔐ.ლ";
  translation["z"] = "(´・ω・`)";
  translation[' '] = "       "; 

  string = this.value();
  user_input = split(string, "");

  emojis = '';

  if (user_input.length > 1) {
    for (var i = 0; i < user_input.length; i++) {
      addon = user_input[i];
      add = translation[addon];
      emojis += add;
    }
  }
  createCanvas(400,400);
  background('pink')
  textSize(15);
  text(emojis, 20, 20, width - 40);

}