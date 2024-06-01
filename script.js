document.addEventListener("DOMContentLoaded", () => {
  // Apply saved colors to blobs on page load
  const blobs = document.querySelectorAll(".blob");
  blobs.forEach((blob, index) => {
    const savedColor = localStorage.getItem(`blobColor${index}`);
    if (savedColor) {
      blob.style.backgroundColor = savedColor;
    }
  });

  // Add event listeners to blobs to change color and save to localStorage on click
  blobs.forEach((blob, index) => {
    blob.addEventListener("click", () => {
      const newColor = getRandomColor();
      blob.style.backgroundColor = newColor;
      localStorage.setItem(`blobColor${index}`, newColor);
    });
  });
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
