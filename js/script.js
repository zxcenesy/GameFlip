let cardOne = null;
let cardTwo = null;
let clickPermission = true;

let counterAttempt = document.getElementsByClassName("counter__attempt")[0].querySelector('span');

let counterFound = document.getElementsByClassName("counter__found")[0].querySelector('span');

const cards = document.getElementsByClassName("game__card");

for (let i=0; i<cards.length; i++){
    cards[i].onclick = function () {
        if (clickPermission == true && !cards[i].classList.contains('completed')){
        cards[i].classList.add('flip');  

        if (cardOne == null){
            cardOne = i;
        } else {
            if (i != cardOne){
                cardTwo = i;
                clickPermission = false;
            }
         }
         if (cardOne != null && cardTwo != null) {
            if(cards[cardOne].firstElementChild.className === cards[cardTwo].firstElementChild.className)
            {
                setTimeout(() => {
                    cards[cardOne].classList.add('completed');
                    cards[cardTwo].classList.add('completed');

                    cardOne = null;
                    cardTwo = null;
                    clickPermission = true;
                    counterAttempt.innerHTML = parseInt(counterAttempt.innerText) + 1;
                }, 1000);
            }   else{
                setTimeout(() => {
                    cards[cardOne].classList.remove("flip");
                    cards[cardTwo].classList.remove('flip');

                    cardOne = null;
                    cardTwo = null;
                    clickPermission = true;
                }, 1000);         
         }
         counterFound.innerHTML = parseInt(counterFound.innerText) + 1;
        }
    }
  }
}





