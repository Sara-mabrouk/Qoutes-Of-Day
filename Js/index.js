var btn = document.getElementById("btn");
var details = document.getElementById("details");

var quoteArray = [
'" A friend is someone who knows all about you and still loves you" <p>― Elbert Hubbard ― </p>',
'" Being deeply loved by someone gives you strength, while loving someone deeply gives you courage" <p> ― Lao Tzu ― </p>',
'" A day without sunshine is like, you know, night"<p>― Steve Martin ―</p>',
'" It takes a great deal of bravery to stand up to our enemies,but just as much to stand up to our friends" <p> ― J.K. Rowling, Harry Potter and the Sorcerers Stone ― </p>',
'" We are what we pretend to be, so we must be careful about what we pretend to be "<p>― Kurt Vonnegut, Mother Night  ― </p>',
'" And in that moment, I swear we were infinite" <p>― Stephen Chbosky, The Perks of Being a Wallflower ― </p>',
'" There is nothing better than a friend, unless it is a friend with chocolate" <p>― Linda Grayson ― </p>',
'" Don’t walk in front of me … I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend "',
'" Never tell the truth to people who are not worthy of it" <p> ― Mark Twain ― </p>',
'" Happiness is when what you think, what you say, and what you do are in harmony " <p> ― Mahatma Gandhi ― </p>',
'" Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great" <p> ― Mark Twain ― </p>',
'" Life is an awful, ugly place to not have a best friend" <p> ― Sarah Dessen ― </p>',

];
// answer-1
// ===========================>>
// function generateQuotes() {
//   var randIndx = Math.floor(Math.random() * quoteArray.length);
// details.innerHTML = quoteArray[randIndx];
// }
// answer-2
// ===========================>>
var num = -1;
function generateQuotes() {
    var randIndx = Math.floor(Math.random() * quoteArray.length);
    while (num == randIndx) {
        randIndx = Math.floor(Math.random() * quoteArray.length);
    }
    console.log(randIndx);
    document.getElementById("details").innerHTML = quoteArray[randIndx];
    num = randIndx;
}

