const apiKey = "sN7xRbvivve6Jd5Ohun0XXnBH6aFgMYB";

const gifButton = document.querySelector("#fetch-gif-btn");
const gifContainer = document.querySelector("#gif-container");

gifButton.addEventListener("click", async () => {
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=genshin%20impact&limit=8`;

    try {
        const response = await fetch(endpoint);

        if (!response.ok) {
            throw new Error("Giphy request failed");
        }

        const data = await response.json();

        const images = data.data.map(gif => gif.images.original.url);

        console.log(images);
        gifContainer.innerHTML = "";
        for (const imageUrl of images) {
            gifContainer.innerHTML += `<img src="${imageUrl}" class="col-3 mb-3" alt="Giphy GIF">`;
}


    } catch (error) {
        console.error("Error fetching GIFs:", error);
    }
});
