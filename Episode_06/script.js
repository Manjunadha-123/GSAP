var breakTheText = function () {
  var h1 = document.querySelector("h1");
  var h1Text = h1.textContent;

  var splittedText = h1Text.split("");
  var halfLength = splittedText.length / 2;

  var clutter = "";

  splittedText.forEach(function (elem,index) {
    if(index < halfLength){
        clutter += `<span class="a">${elem}</span>`;
    }
    else{
        clutter += `<span class="b">${elem}</span>`;
    }
  });

  h1.innerHTML = clutter;
};

breakTheText();


gsap.from("h1 .a",{
    y:100,
    opacity:0,
    duration:0.5,
    delay:0.3,
    stagger:0.15,
})

gsap.from("h1 .b",{
    y:100,
    opacity:0,
    duration:0.5,
    delay:0.3,
    stagger:-0.15,
})
