let img1 = 'images/one.jpg'
let img2 = 'images/two.jpg'
let img3 = 'images/three.jpg'
let img4 = 'images/four.jpg'
let img5 = 'images/five.jpg'
let img6 = 'images/six.jpg'
let img7 = 'images/seven.jpg'
let img8 = 'images/eight.jpg'
const pathArray = [img1, img2, img3, img4, img5, img6, img7, img8];
let imgArr = [];
for (let i = 0; i < pathArray.length; i++) {
    let img = new Image();
    img.src = pathArray[i];
    imgArr.push(img);

}
// console.log(imgArr);
const start_button = document.getElementById('start');
const reset_button = document.getElementById('reset');
start_button.addEventListener('click', start_game);
reset_button.addEventListener('click', reset_game);
function start_game() {
    console.log('game started');
    //.....show img first few second will figure out how to do that.
    setInterval(stop_watch, 1000);
    loadImg();


}
function reset_game() {
    console.log('game reset');

}

function stop_watch() {
    document.getElementById('timer').innerText = ` ${time++} seconds`
}
let time = 0;
function loadImg() {
    let numbers = [0, 1, 2, 3, 4, 5, 6, 7];
    let button_random_array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    for (let i = 0; i<button_random_array.length; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        [button_random_array[i], button_random_array[j]] = [button_random_array[j], button_random_array[i]];
    }
    // console.log(numbers);
    console.log(button_random_array);
    
    let buttons = document.getElementsByClassName('inner_grid');
    console.log(buttons);
     let a= 0;
    for (let i = 0; i < 1; i++) {
        // console.log(button_random_array[a++])
        // console.log(button_random_array[a++])
        addImageToButtons(buttons[button_random_array[a++]], numbers[i]); // 0 , 0
        // console.log("a1 : ",a,b,i);
        addImageToButtons(buttons[button_random_array[a++]], numbers[i]);// 1, 0
        // console.log("a1 : ",a,c,i);
    }

}
function addImageToButtons(button, randomNumber) {
    // console.log(button,randomNumber, 'appended');
    // button.innerHtml = 
    let newdiv = document.createElement('div')
    // newdiv.innerHTML= imgArr[randomNumber]
    newdiv.append(imgArr[randomNumber])

console.log(imgArr[randomNumber],  'img')
// console.log(newdiv, 'newdiv');

    button.append(
        
    );
    
}