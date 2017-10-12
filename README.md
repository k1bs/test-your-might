# Test Your Might

![Test Your Might Original](../images/readmehero.png)

## What is Test Your Might?

- Test your might is a recreation of the mini-game from the original Mortal Kombat, released in 1992 by Midway. For kids growing up with a Sega Genesis in their home, this mini-game was a button-masher's paradise.

- To see the original mini-game in action, see [This Clip on YouTube.](https://youtu.be/RiwMEI2wNxQ?t=3m17s)

## Technical Discussion

<dl>
<dt>HTML</dt>
<dd>The game makes use of HTML with image pre-loading, audio elements, and "fade to black" divs.</dd>
<dt>CSS</dt>
<dd>The game relies on a large amount of CSS which processes nearly all animatinos, scene transitions, and game field set up.</dd>
<dt>JavaScript</dt>
<dd>The game uses a large amount of JavaScript to provide game logic, and Player Constructor functions. In addition, the Player object's prototype has two added methods.</dd>
<dt>jQuery</dt>
<dd>All DOM manipulation is done exclusively with jQuery. In addition, the core bar-filling mechanic makes extensive use of jQuery animation</dd>
</dl>

### Notes on Game Structure

The core of the game's engine relies on two Objects - the `Player` and the `GameState`. These are created using Oject Constructor functions, and provide most of the game's scorekeeping and scene transition mechanics. `Player` tracks each player's score, and has methods assigned to the Prototype allowing for the storing and incrementing of the player's score. The `GameState` provides methods allowing scene transition, and retrieval of material names and levels.

Below is a sample of the `Player` constructor function, and one of the methods on the Prototype.

```function Player(number, score) {
  this.number = number;
  this.score = score;
}

Player.prototype.storeScore = function() {
  let holderName = `${this.number}-score`;
  localStorage.setItem(holderName, this.score);
};
```

## The Making of Test Your Might

![Wireframe 1](wireframe1.png)
![Wireframe 2](../assets/wireframe2.png)

<dl>
<dt>Author</dt>
<dd>Alex Kibler</dd>
<dt>Mortal Kombat was created by</dt>
<dd>Midway Games</dd>
<dt>Credits</dt>
<dd>Sounds and background are from <a href="https://www.youtube.com/watch?v=RiwMEI2wNxQ&t=35s">Amy Rose's Mortal Kombat Longplay</a> video on YouTube.</dd>
<dd>Classic sprites and additional sounds are from <a href="http://www.mortalkombatwarehouse.com/">Mortal Kombat Warehouse</a>, a fantastic resource dedicated to all of the classic Mortal Kombat games.</dd>
<dd><a href="https://www.w3schools.com/jquery/eff_animate.asp">This</a> W3Schools article helped me in learning about jQuery animations, and how they could be controlled with event handlers.</dd>
</dl>

## Opportunities for Further Growth

While the game functions properly, there are still additional work that could be done.

### Cleaning Up
- The game makes excessive use of the `setTimeout()` JavaScript method, often with multiple listed one after another. Maybe I could find a way to compartmentalize these?
- Also, I would like to refactor additional functionality into the `Player` and `GameState` Object methods, helping the code be a little more DRY.

## Future Development

#### Stage 1
- Add a Character Select screen, complete with more playable characters to choose from.
- Add a High Scores table at the end of the game, displaying the best scores ever.

#### Stage 2
- Add secret characters, maybe with a combination of key presses?
- Add additional backdrops, with a randomization algorithm.






