var chico = ["Big Chico Creek","Bidwell Mansion","George Peterson Rose Garden",
            "Old Hutch's Plaza","Chico City Plaza"];
var current;

function shuffleGallery()
{
  var index = Math.floor(Math.random() * chico.length);
  while(index == current) {
    index = Math.floor(Math.random() * chico.length);
  }
  console.log(chico[index]);
  current = index;
}
