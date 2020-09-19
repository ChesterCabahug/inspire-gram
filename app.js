// const hearts = document.querySelectorAll(".like");
const quoteContainer = document.querySelector(".quote-container");
const loader = document.querySelector("#loader")
let quotesArray;
let quotesInsideTheApp = []

let isInitialLoad = true

// hearts.forEach((heart) => {
//     heart.addEventListener("click", () => {
//         heart.classList.toggle("like-blast");
//     });
// });

const updateDOM = () => {
    quotesArray.forEach((quote) => {
        quotesInsideTheApp.push(quote)
        isInitialLoad = false
        // quote card
        const card = document.createElement("div");
        card.classList.add("quote");

        // ********************************************************
        // quote text==============================================
        const quoteTextContainer = document.createElement("div");
        quoteTextContainer.classList.add("text");

        const quoteText = document.createElement("p");
        quoteText.textContent = quote.q;
        // ********************************************************

        // ********************************************************
        // author  ================================================
        const authorLike = document.createElement("div");
        authorLike.classList.add("author-like");

        const author = document.createElement("p");
        author.textContent= quote.a;

        // ********************************************************

        // ********************************************************
        // like ❤  ===============================================
        const likeContainer = document.createElement("div");
        likeContainer.classList.add("like-container");

        const like = document.createElement("div");
        like.classList.add("like");
        // ********************************************************

        // ********************************************************
        // appending every createElement  =========================
        likeContainer.appendChild(like);
        authorLike.append(author, likeContainer);

        quoteTextContainer.appendChild(quoteText) 

        card.append(quoteTextContainer, authorLike)

        // console.log(card)
        // console.log(quoteContainer)
        quoteContainer.appendChild(card)
        // ********************************************************


        if(!isInitialLoad) {
            loader.hidden = true
        }

    });
};

// get quotes
const getQuote = async () => {
    const proxyUrl = "https://dry-hamlet-95494.herokuapp.com/";
    const apiUrl = "https://zenquotes.io/api/quotes";
    try {
        const response = await fetch(proxyUrl + apiUrl);
        quotesArray = await response.json();
        console.log(quotesArray[1].q);
        console.log(quotesArray[1].a);
        // updateDOM()
    } catch (error) {
        console.log(error);
    }
};



// check to see if scrolling near bottom of page, load more quotes
window.addEventListener("scroll", (e) => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
        getQuote()
    }
})

getQuote();
