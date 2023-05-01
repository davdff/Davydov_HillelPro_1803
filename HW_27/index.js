const images = ['image/1.jpg', 'image/2.jpg', 'image/3.jpg', 'image/4.jpg', 'image/5.jpg', 'image/6.jpeg', 'image/7.jpg', 'image/8.jpg', 'image/9.jpg', 'image/10.jpg'];
const randomNumber = Math.floor(Math.random() * 10) + 1;
const img = document.createElement('img');
img.src = images[randomNumber - 1];
document.getElementById('divImg').appendChild(img);