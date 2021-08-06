module.exports = function toReadable(number) {

    let words = ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen"]
    let words_ten = ["ten", "twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"]
    let words_next = ["hundred", "thousand", "million"]

    let txt = ''

    if (number <= 13) {
        txt = words.find(element => words.indexOf(element) === number);
    } else if (number === 15) {
       txt = 'fifteen';
    } else if (number === 18) {
        txt = 'eighteen';
    } else if (number >= 14 && number <= 19 && number !== 15 && number !==18) {
        txt = `${words.find(element => words.indexOf(element) === number - 10)}teen`;
    } else if (number >= 20 && number <= 99) {
        number%10 === 0?txt = words_ten.find(element => words_ten.indexOf(element) + 1 === (number/10)):txt = `${words_ten.find(element => words_ten.indexOf(element)+1 === Math.floor(number/10))} ${words.find(element => words.indexOf(element) === number%10)}`;
    } else if (number >= 100 && number <= 999) {
        if (number%100 === 0) {
            txt = `${words.find(element => words.indexOf(element) === (number/100))} ${words_next[0]}`;
        } else if (number%10 === 0) {
            txt = `${words.find(element => words.indexOf(element) === Math.floor(number/100))} ${words_next[0]} ${words_ten.find(element => words_ten.indexOf(element) + 1 === ((number%100)/10))}`;
        } else if (number%100 >= 20 && number%100 <= 99) {
            txt = `${words.find(element => words.indexOf(element) === Math.floor(number/100))} ${words_next[0]} ${words_ten.find(element => words_ten.indexOf(element) + 1 === Math.floor((number%100)/10))} ${words.find(element => words.indexOf(element) === number%10)}`;
        } else if (number%100 === 18) {
            txt = `${words.find(element => words.indexOf(element) === Math.floor(number/100))} ${words_next[0]} eighteen`;
        } else if (number%100 === 15) {
            txt = `${words.find(element => words.indexOf(element) === Math.floor(number/100))} ${words_next[0]} fifteen`;
        }  else if (number%100 >= 14 && number%100 <= 19 && number%100 !== 15 && number%100 !== 18) {
            txt = `${words.find(element => words.indexOf(element) === Math.floor(number/100))} ${words_next[0]} ${words.find(element => words.indexOf(element) === ((number%100) - 10))}teen`;
        } else {
            txt = `${words.find(element => words.indexOf(element) === Math.floor(number/100))} ${words_next[0]} ${words.find(element => words.indexOf(element) === number%100)}`;
        }        
    }

return txt
}
