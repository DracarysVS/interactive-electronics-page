const yesText = document.getElementById("yes-text");

const components = document.querySelectorAll(".component");
components.forEach((component) => {
  component.addEventListener("mouseenter", () => {
    yesText.innerHTML = "YES! It is!!";
    yesText.style.opacity = "1";
    yesText.style.transition = "opacity 0.5s ease-in-out";
    yesText.style.color = "#4caf50";  // Green color effect
  });

  component.addEventListener("mouseleave", () => {
    yesText.innerHTML = "Is it YES?";
    yesText.style.opacity = "0.8";
    yesText.style.color = "#ff5722";  // Original color when back to normal
  });
});
