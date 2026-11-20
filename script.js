const imageList = document.getElementById("imageList");

for (let number = 1; number <= 10; number++) {
  const imagePath = `images/picture%20${number}.jpg`;

  const link = document.createElement("a");
  link.className = "image-link";
  link.href = imagePath;
  link.target = "_blank";
  link.rel = "noopener";
  link.setAttribute("aria-label", `Open picture ${number}`);

  const image = document.createElement("img");
  image.src = imagePath;
  image.alt = `Picture ${number}`;
  image.loading = "lazy";

  const label = document.createElement("span");
  label.textContent = `Picture ${number}`;

  link.append(image, label);
  imageList.appendChild(link);
}
