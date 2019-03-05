### Pig Dice
#### By Perry Obara
#### Project Description
  This project allows a user to play a pig dice game.
This project allows a user to play a game which allows a user to roll a dice and get a value which allows them to either win or lose based on the score that they all achieve### This is an online quiz
- [The link to the website is](https://perry-perrota.github.io/pigdice/)
### BDD
* A user clicks roll the dice once its their turn.
* A score of 1 makes the user get a score of 0 and turn is passed over to player 2
* A score of 2-6(2,3,4,5,6) adds the value to the current score of the player
* A user can choose to hold their score by passing the turn to the next player
* If the player choses to continue playing their turn, a score of 1 will nullify their score and pass the turn to the other player
* A winner is selected after getting 100 points or a value that is greater than that.

| Action       | Result       | Effect  |
| ------------- |:-------------:| -----:|
| Click on roll      | display random number between 1 and 6 | Add that number to the turn total |
| Click on hold      | Adds the round total to the overall score      |   The turn goes to the other player |
| When a player's overall score is equal to or greater than the winning score (default is 100) | The player wins | game ends |

#### Bugs
The program did not have any known bugs at the time of deployment
#### Contacts
Feel free to reach me for any feedback or questions.
* perryobara@gmail.com
* 0728678161

### License
MIT License

Copyright (c) 2019 Perry Obara

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
