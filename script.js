const dragndrop = (() => {
  let myX = "";
  let myY = "";
  let whichArt = "";

  const resetZ = () => {
    const elements = document.querySelectorAll("img");
    for (let i = elements.length - 1; i >= 0; i--) {
      elements[i].style.zIndex = 5;
    }
  };

  const moveStart = (e) => {
    whichArt = e.target;
    myX = e.offsetX === undefined ? e.layerX : e.offsetX;
    myY = e.offsetY === undefined ? e.layerY : e.offsetY;
    resetZ();
    whichArt.style.zIndex = 10;
  };

  const moveDrop = (e) => {
    e.preventDefault();
    whichArt.style.left = e.pageX - myX + "px";
    whichArt.style.top = e.pageY - myY + "px";
  };

  const moveDragOver = (e) => {
    e.preventDefault();
  };

  const touchStart = (e) => {
    e.preventDefault();
    let whichArt = e.target;
    let touch = e.touches[0];
    let moveOffsetX = whichArt.offsetLeft - touch.pageX;
    let moveOffsetY = whichArt.offsetTop - touch.pageY;

    resetZ();
    whichArt.style.zIndex = 10;

    whichArt.addEventListener("touchmove", () => {
      let positionX = touch.pageX + moveOffsetX;
      let positionY = touch.pageY + moveOffsetY;
      whichArt.style.left = positionX + "px";
      whichArt.style.top = positionY + "py";
    });
  };

  document
    .querySelector("body")
    .addEventListener("dragstart", moveStart, false);
  document
    .querySelector("body")
    .addEventListener("dragover", moveDragOver, false);
  document
    .querySelector("body")
    .addEventListener("touchstart", touchStart, false);
  document.querySelector("body").addEventListener("drop", moveDrop, false);
})();
