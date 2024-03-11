(() =>{
const initializeEvent = () =>{
    const enlargeImage = (event) => {
        const imagePath = event.target.src;
        const largeImage = document.querySelector(".large-image img");
        largeImage.src = imagePath;
        const largeImageContainer = document.querySelector(".large-image")
        largeImageContainer.style.display = "block";
    
    }
    const galleryImages = document.querySelectorAll(".gallery-container img")
    galleryImages.forEach((image) => {
        image.addEventListener("click", enlargeImage);
    })
    
    const close = () =>{
        const largeImageContainer = document.querySelector(".large-image")
        largeImageContainer.style.display = "none";
    }
    const closeButton = document.querySelector(".large-image button");
    closeButton.addEventListener("click", close);
};

const populateImages = () =>{
    const images = [
        "./images/1.avif",
        "./images/2.avif",
        "./images/3.avif",
        "./images/4.avif",
        "./images/5.avif",
        "./images/6.avif",
    ];

    const allImages = images.map(image => {
        return `
        <div>
        <img src="${image}" alt="">
        </div>
        `
    })
    const galleryContainer = document.querySelector(".gallery-container");
    galleryContainer.innerHTML = allImages.join(" ");

}
populateImages ();
initializeEvent ();


})();