export function eyeBall() {
  const eye = document.querySelector(".eye-left");

  if (eye) {
    window.addEventListener("mousemove", (evt) => {
      const x = -(window.innerWidth / 2 - evt.pageX) / 360;
      const y = -(window.innerHeight / 2 - evt.pageY) / 360;
      eye.style.transform = `translateY(${y}px) translateX(${x}px)`;
    });
  }
}
