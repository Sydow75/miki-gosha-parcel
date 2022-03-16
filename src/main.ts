const imgUrl = new URL('./img/spring.jpg', import.meta.url);

const img = document.createElement('img');
img.src = imgUrl.href;
document.body.append(img);

console.log(imgUrl);
