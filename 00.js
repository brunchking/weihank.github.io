
var katakana = ["ア", "イ", "エ","エ","オ","カ","キ","ク","ケ","コ","サ","シ","ス","セ","ソ","タ","チ","ツ","テ","ト","ナ","ニ","ヌ","ネ","ノ","ハ","ヒ","フ","ヘ","ホ","マ","ミ","ム","メ","モ","ヤ","❌","ユ","❌","ヨ","ラ","リ","ル","レ","ロ","ワ","❌","ン","❌","ヲ"];
var hiragana = ["あ", "い", "う","え","お","か","き","く","け","こ","さ","し","す","せ","そ","た","ち","つ","て","と","な","に","ぬ","ね","の","は","ひ","ふ","へ","ほ","ま","み","む","め","も","や","❌","ゆ","❌","よ","ら","り","る","れ","ろ","わ","❌","ん","❌","を"];


window.onload = init;

function init(){
    var text = document.getElementsByTagName("p");
    for(var i=0; i<text.length; i++){
        text[i].onmouseover = Kata;
        text[i].onmouseout = Hira;
    }
}

function Kata(eventObj){
    var text = eventObj.target;
    var i = text.id;
    text.innerText = katakana[i];
    text.style.color = "red";
}

function Hira(eventObj){
    var text = eventObj.target
    var i = text.id;
    text.innerText = hiragana[i];
    text.style.color = "white";
}

