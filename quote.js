let quote=document.getElementById('quote');
let author=document.getElementById('author');
let btn=document.getElementById('btn');

// console.log(quote);
// console.log(author);

const url="https://api.quotable.io/random";


let getQuote = () => {
    fetch(url)
    .then((data) => data.json())
    .then((item) => {
        console.log(item.content);
        console.log(item.author);
        quote.innerText=item.content;
         author.innerText=item.author;

        // author.innerHTML=item.author;
       
    });
};

window.addEventListener("load", getQuote);
btn.addEventListener("click",getQuote);