let dead = document.getElementById("dead");//попал
let lost = document.getElementById("lost");//мимо
let j = 0;
let k = 0;

for (let index = 1; index <= 9; index += 1) {
    function getHole( index ) {
        let holeClick = document.getElementById(`hole${index}`);
        return holeClick;
    }

    let hole = getHole( index );
    
    hole.onclick = function() {

        if (hole.className.includes("hole_has-mole") === true) {
            j += 1
            dead.textContent = j;
        } else {
            k += 1
            lost.textContent = k;
        }

        if (j === 10) {
            alert ("Вы победили!");
            dead.textContent = 0;
            j = 0;
            lost.textContent = 0;
            k = 0;
        } else if (k === 5) {
            alert ("Вы проиграли");
            dead.textContent = 0;
            j = 0;
            lost.textContent = 0;
            k = 0;
        }        
    }
}
