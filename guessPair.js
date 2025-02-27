const imgArr = [
    'images/one.jpg',
    'images/two.jpg',
    'images/three.jpg',
    'images/four.jpg',
    'images/five.jpg',
    'images/six.jpg',
    'images/seven.jpg',
    'images/eight.jpg'
];

let buttons = document.querySelectorAll('.inner_grid');
const start_button = document.getElementById('start');
const reset_button = document.getElementById('reset');
start_button.addEventListener('click', start_game);
reset_button.addEventListener('click', reset_game);
let intervalId;
let time = 0;
buttons.forEach(button=>{
    button.addEventListener('click',()=>{
        let first_click= button.querySelector('.image-container img').getAttribute('src');
        let second_click= button.querySelector('.image-container img').getAttribute('src');
        console.log(first_click);
        console.log(second_click);
        
        button.firstChild.style.visibility='visible';
        // console.log(button.querySelector('.image-container img').getAttribute('src'));
        
    })
    
})
function start_game() {
    console.log('game started');
    if (!intervalId) {

        intervalId = setInterval(stop_watch, 1000);
        loadImg();
    }
    //.....show img first few second will figure out how to do that...
}
function reset_game() {
    clearInterval(intervalId);
    intervalId = null;
    document.getElementById('timer').innerText = ` `;
    for (let index = 0; index < buttons.length; index++) {

        removeImagesFromButton(index);
        buttons[index].style.visibility = "visible";

    }
    console.log('game reset');
    time = 0;

}

function stop_watch() {
    document.getElementById('timer').innerText = ` ${time++} seconds`
}
function loadImg() {
    let randomIndexForImage = [0, 1, 2, 3, 4, 5, 6, 7]; //[2,0,4,]
    let randomIndexForButton = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] //[3,6,1,,.......]
    for (let i = randomIndexForImage.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [randomIndexForImage[i], randomIndexForImage[j]] = [randomIndexForImage[j], randomIndexForImage[i]];
    }
    for (let i = 0; i < randomIndexForButton.length; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        [randomIndexForButton[i], randomIndexForButton[j]] = [randomIndexForButton[j], randomIndexForButton[i]];
    }



    let a = 0;
    for (let i = 0; i < 8; i++) {
        addImageToButtons(buttons[randomIndexForButton[a++]], randomIndexForImage[i]);

        addImageToButtons(buttons[randomIndexForButton[a++]], randomIndexForImage[i]);



    }
    setTimeout(() => {
        document.querySelectorAll(".image-container").forEach(container => {
            container.style.visibility = "hidden";
        });
        console.log("Everythig hidden");

    }, 5000);

}
function addImageToButtons(button, randomNumber) {
    let newdiv = document.createElement('div');
    newdiv.classList.add("image-container");
    newdiv.innerHTML += `<img src="${imgArr[randomNumber]}">`;
    button.appendChild(newdiv);

}
function removeImagesFromButton(index) {
    buttons[index].innerHTML = '';
}