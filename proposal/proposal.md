Alex Kibler / Oct 6, 2017

# Test Your Might Proposal

![Test Your Might Original](testoriginal.png)

## What is Test Your Might?

- Test your might is a recreation of the mini-game from the original Mortal Kombat, released in 1992 by Midway. For kids growing up with a Sega Genesis in their home, this mini-game was a button-masher's paradise.
- To see the original mini-game in action, see [This Clip on YouTube.](https://youtu.be/RiwMEI2wNxQ?t=3m17s)

## Wireframe

![Wireframe 1](proposal/wireframe1.png)
![Wireframe 2](proposal/wireframe2.png)

| Element | Aspects |
| --- | --- |
| Base | Browser window, game field div |
| Player input | Power bar, filled by repeatedly pressing keyboard keys |
| Game output (interactable) | *Filled power bar* ( different levels have different lines to reach on the bar); *breakable object* (object breaks in half if line-to-meet is made); *winner score* (both players scores totaled and compared) |
| Game output (static) | Room description; result of input field; list of objects in room |


## Initial thoughts on game structure

- The game will consist of a visual representation of each player's power bar, and a visual representation of success or failure for each individual level. There will be five levels in total, with the bar to reach going up every round. The game will be incremental, with the "line to beat" increasing with every level, with the final levels being very difficult.

- At the end of each round, I'll need a way to measure how much of the bar was filled, and assign points based on that distance. This score will need to be additive, and persist from level to level. If the player passes the bar, I will need to provide visual feedback, and if the player does not, I'll will need to do the same. Regardless, points will be awarded. The player with the most points at the end of round 5 is the winner.

- From the user's perspective, Player One will use the A,Z, and X keys to control the bar, and Player Two will use >,/, and '. The instructions will have to be clearly visible, perhaps on a landing page? Button mashing reigns supreme, as the A and Z keys are rapidly pressed. The X key (for Player One) freezes their effort in time. They are then awarded with "breaking the wood" and a point total on screen.

- Should the game mechanics come faster than anticipated, I will add additional visual stylings, eventually hoping to recreate the visuals of the original, except with Taka and John Master as the contestants. I will need to take photographs for this.

## Phases of Completion



#### Phase -3

- ~~Get bar gravity working~~ Achieved 10/6/17
- ~~Player can control bar by button mashing~~ Achieved 10/6/17

#### Phase -2

- ~~Bar gravity can be frozen in place by pressing additional key.~~ Achieved 10/8/2017
- ~~Fullness of bar is measured.~~ Achieved 10/8/2017
- ~~Score is calculated based on how the full the bar is.~~ Achieved 10/8/2017
- ~~Implement Player constructor function.~~ Achieved 10/8/2017

#### Phase -1

- ~~Visual interaction if line is reached. (breaking the board)~~ Achieved 10/8/2017
- ~~Line to make is increased every level.~~ Achieved 10/8/2017
- ~~Score is stored til next round.~~ Achieved 10/9/2017
- ~~Generate new level.~~ Achieved 10/9/2017

#### Phase 0

- ~~Instructions screen~~ Achieved 10/10/2017
- ~~Visual styling~~ Achieved 10/10/2017
- ~~Players scores after five levels are compared~~ Achieved 10/10/2017

#### Phase 1

- ~~Taka and John Master added as sprites~~ Achieved 10/11/2017
- High scores table

#### Phase 2

- Username retrieves high score tables
- Character select

## Links and Resources

https://www.w3schools.com/code/tryit.asp?filename=FK9ZSNL6QET7
- This is a code snippet I did to begin playing with the bar responding to your tapping.

https://www.w3schools.com/howto/howto_js_countdown.asp
- This is an article about making countdown timers.


