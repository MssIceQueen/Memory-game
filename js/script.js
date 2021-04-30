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

let cards = document.getElementsByClassName("memory-card");
let cards = [...card];

for (let i = 0; i < cards.length; i++){
    cards[i].addEventListener("click", displayCard);
};
//displayCard is a function we'll talk about this soon

/*

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1>
      <p>Architect & Engineer</p>
      <p>We love that guy</p>
    </div>
  </div>
</div>

 */