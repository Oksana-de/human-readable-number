module.exports = function toReadable(number) {

var words=["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen"];
var words_ten=["twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];

if ((number>=100 && number<1000)) {

  if (((number%100)>=21 && (number&100)<100)) {

  for (var i=0; i<((number%100)-20); i++) {
    var txt=words[(Math.floor(number/100)-1)]+" hundred"+" "+words_ten[(Math.floor((number%100)/10)-2)]+" "+words[(((number%100)%10)-1)];
      }
} else if ((number%100)==20) {
      var txt=(words[(Math.floor(number/100)-1)]+" hundred"+" twenty");
} else if (((number%100)>=14 && (number%100)<=19)) {

for (var i=0; i<((number%100)-10); i++) {
    var txt=ords[(Math.floor(number/100)-1)]+" hundred"+" "+words[i]+"teen";
      }
    } else {
for (var i=0; i<number; i++) {
  var txt=ords[(Math.floor(number/100)-1)]+" hundred"+" "+words[i];
}
}

} else {

  if ((number>=21 && number<100)) {

  for (var i=0; i<(number-20); i++) {
    var txt=words_ten[(Math.floor(number/10)-2)]+" "+words[((number%10)-1)];
      }
} else if (number==20) {
      var txt="twenty";
} else if ((number>=14 && number<=19)) {

for (var i=0; i<(number-10); i++) {
    var txt=words[i]+"teen";
      }
    } else {
for (var i=0; i<number; i++) {
  var txt=words[i];
}
}
}
return txt;
}
