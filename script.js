const imageList = document.getElementById("imageList");

if (!imageList) {
    console.error("Could not find imageList!");
} else {

    const folder = imageList.dataset.folder;
    const totalImages = 10;

    console.log("Selected folder:", folder);

    for (let number = 1; number <= totalImages; number++) {

        const imagePath = `images/${folder}/picture%20${number}.jpg`;

        const link = document.createElement("a");
        link.className = "image-link";
        link.href = imagePath;
        link.target = "_blank";
        link.rel = "noopener";

        const image = document.createElement("img");
        image.src = imagePath;
        image.alt = `Picture ${number}`;
        image.loading = "lazy";

        image.onerror = () => console.log("Image not found:", imagePath);

        const label = document.createElement("span");
        label.textContent = `Picture ${number}`;

        link.append(image, label);
        imageList.appendChild(link);
    }
}
