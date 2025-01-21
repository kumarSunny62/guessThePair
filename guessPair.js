let img1 = 'images/one.jpg'
let img2 = 'images/two.jpg'
let img3 = 'images/three.jpg'
let img4 = 'images/four.jpg'
let img5 = 'images/five.jpg'
let img6 = 'images/six.jpg'
let img7 = 'images/seven.jpg'
let img8 = 'images/eight.jpg'
const pathForImageArray = [img1, img2, img3, img4, img5, img6, img7, img8];
let imgArr = [];
for (let i = 0; i < pathForImageArray.length; i++) {
    let img = new Image();
    img.src = pathForImageArray[i];
    imgArr.push(img);

}
// console.log(imgArr);
const start_button = document.getElementById('start');
const reset_button = document.getElementById('reset');
start_button.addEventListener('click', start_game);
reset_button.addEventListener('click', reset_game);
function start_game() {
    console.log('game started');
    //.....show img first few second will figure out how to do that...
    setInterval(stop_watch, 1000);
    loadImg();


}
function reset_game() {
    console.log('game reset');

}

let time = 0;
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
    // console.log(randomIndexForImage);
    console.log(randomIndexForButton);

    let buttons = document.getElementsByClassName('inner_grid');
    console.log(buttons);
    let a = 0;
    for (let i = 0; i < 8; i++) {
        // console.log(randomIndexForButton[a++])
        // console.log(randomIndexForButton[a++])
        // console.log({a})
        addImageToButtons(buttons[randomIndexForButton[a++]], randomIndexForImage[i]); // 0 , 0  i=0  bra=3  ni=2
        // console.log(randomIndexForButton[a], "randomIndexForButton[a] - 1", randomIndexForImage[i])
        // console.log("a1 : ",a,b,i);
        // console.log({a})
        addImageToButtons(buttons[randomIndexForButton[a++]], randomIndexForImage[i]);// 1, 0
        // console.log({a});
        
        // console.log("a1 : ",a,c,i);
    }

}
function addImageToButtons(button, randomNumber) {
    // console.log(button,randomNumber, 'appended');
    // button.innerHtml = 
    let newdiv = document.createElement('div')
    newdiv.classList.add(randomNumber)
    // newdiv.innerHTML= imgArr[randomNumber]
    // console.log({randomNumber})
    newdiv.append(imgArr[randomNumber])

    // console.log(imgArr[randomNumber], randomNumber, 'img')
    console.log(newdiv);

    button.append(newdiv);

}