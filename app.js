const hearts = document.querySelectorAll(".like");

hearts.forEach((heart) => {
    heart.addEventListener("click", () => {
        heart.classList.toggle("like-blast");
    });
});

// get quotes
const getQuote = async () => {
    const proxyUrl = "https://dry-hamlet-95494.herokuapp.com/";
    const apiUrl = "https://zenquotes.io/api/quotes";
    try {
        const response = await fetch(proxyUrl + apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

getQuote();
