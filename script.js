let lines = [
    "Your smile is contagious; it brightens up my day.",
    "I love how you always find a way to make me laugh.",
    "You have such a kind heart; it's one of the things I love most about you.",
    "You make even the ordinary moments extraordinary.",
    // "Thinking about you always brings a smile to my face.",
    // "I'm grateful for every moment I get to spend with you.",
    // "You have this amazing ability to make everything better.",
    // "Just being around you makes everything feel right.",
];

let pics = [
    "/img/1img.jpg",
    "/img/2img.jpg",
    "/img/3img.jpg",
    "/img/4img.jpg"
];

let index = 0;

let imgbox = document.querySelector(".main");
let btn = document.querySelector(".btn");
let text = document.querySelector('.line');

btn.addEventListener("click", () => {
    index++;
    if (index >= lines.length) {
        index = 0;
    }
    imgbox.style.backgroundImage = `url(${pics[index]})`;
    text.innerHTML = lines[index];
})