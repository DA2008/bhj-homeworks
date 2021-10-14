const addText = function () {
    const timer = document.getElementById("timer");
  
    timer.textContent -= 1;
    j += 1;
  
    if (timer.textContent == 0) {
  
      alert('Вы победили в конкурсе!');
  
      timer.textContent = j + 1;
      j = 0;
    }
  }
  
  let j = 0;
  setInterval(addText, 1000);