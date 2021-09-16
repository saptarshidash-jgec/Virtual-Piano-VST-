var no = document.querySelectorAll("div").length;
// alert(no);
for(var i=0;i<no;i++)
{
  document.querySelectorAll("div")[i].addEventListener("click",function(){
    var ss=this.innerHTML;
    console.log(ss);
    playy(ss);
  });
}
document.addEventListener("keypress",function(event){
  console.log(event.key);
playy(event.key);
});
function playy(xyz)
{
  switch (xyz) {
    case "z":
      // alert("HI");
      var C = new Audio("notes/C.mp3");
      C.play();
      break;
    case "x":
      var D = new Audio("notes/D.mp3");
      D.play();
      break;
    case "c":
      var E = new Audio("notes/E.mp3");
      E.play();
      break;
    case "v":
      var F = new Audio("notes/F.mp3");
      F.play();
      break;
    case "b":
      var G = new Audio("notes/G.mp3");
      G.play();
      break;
    case "n":
      var A = new Audio("notes/A.mp3");
      A.play();
      break;
    case "m":
      var B = new Audio("notes/B.mp3");
      B.play();
      break;
    case "s":
        var Db = new Audio("notes/Db.mp3");
        Db.play();
        break;
      case "d":
        var Eb = new Audio("notes/Eb.mp3");
        Eb.play();
        break;
      case "g":
        var Gb = new Audio("notes/Gb.mp3");
        Gb.play();
        break;
      case "h":
        var Ab = new Audio("notes/Ab.mp3");
        Ab.play();
        break;
      case "j":
        var Bb = new Audio("notes/Bb.mp3");
        Bb.play();
        break;
    default:
      console.log("You Pressed Something else");
      }
}
