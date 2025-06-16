var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var imageDiv = document.querySelector("#image");

main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    ease: "back.out",
  });
});

imageDiv.addEventListener("mouseenter", function () {
    cursor.innerHTML = "viewmore"
  gsap.to(cursor, {
    scale: 4,
  });
});

imageDiv.addEventListener("mouseleave", function () {
    cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 1,
  });
});