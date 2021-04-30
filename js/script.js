/* We want to recreate the game memory.

It is a game where you have a bunch of cards.  => card deck

Each card contains an image.                   => assign images to the cards

Of each image there are exactly two cards.     => only 2 cards with the same image => 1 image * 2

The cards are placed in a random order.        => random
// function getCard() {
//     const randomIndex = Math.floor(Math.random() * deck.length);
//     let card = deck[randomIndex];
//     return card;

You get to turn them around. => function to turn them around on the click

If you turned around two cards they either turn back so you can't see their image if they did not match.
=> compare function & if else

And if they did match they stay image face visible.
=> compare function & if else

Must-have features
Clicking cards turns them around
Randomly position the cards
Readme, but that shouldn't even have to be said
Explanation on the page itself
Nice-to-have features
Make it playable by keyboard
Let a user define custom image urls
Make it pleasing to look at
Multiplayer (local) */

// to get all the memory cards from the html doc
let cards = Array.from(document.getElementsByClassName("memory-card"));

//created var to add conditions
let isFlipped,isLocked = false;
let cardOne, cardTwo;

// what the cards need to do once they are clicked
function flipCard() {
    if (isLocked || this === cardOne) return;

    this.classList.add('flip');

    if (!isFlipped) {
        isFlipped = true;
        cardOne = this;
        return;
    }

    cardTwo = this;

    checkForMatch();
}
// to check if the cards that are clicked are a match
function checkForMatch() {
    if (cardOne.dataset.frame === cardTwo.dataset.frame)
    {
        disableCards();
        return;
    }
    unFlipCards();
}
// to disable the cards when they are not a match
function disableCards() {
    cardOne.removeEventListener('click', flipCard);
    cardTwo.removeEventListener('click', flipCard);

    resetTurn();
}
// to flip the cards back that are not a match
function unFlipCards() {
    isLocked = true;

    setTimeout(() => {
        cardOne.classList.remove('flip');
        cardTwo.classList.remove('flip');

        resetTurn();
    }, 1500)
}

(function shuffle() {
    cards.forEach(card => {
        let rand = Math.floor(Math.random() * 4);
        card.style.order = rand.toString();
    });
})();


function resetTurn() {
    isFlipped = false;
    isLocked = false;
    cardOne = null;
    cardTwo = null;
}

// to add the click function
cards.forEach(card => card.addEventListener('click', flipCard));