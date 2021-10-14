const counter = document.getElementById("clicker__counter");//счетчик
const image = document.getElementById("cookie");//клик и изменение размера
image.onclick = changeSize;

let index;
if(counter.textContent == 0) {
  index = 0;
}

function changeSize() {
  index += 1;//счет кликов
  counter.textContent = index;
  if(image.width == 200) {
    image.width = 150
  } else {image.width = 200
  }
}
