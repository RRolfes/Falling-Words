# Falling-Words

### Background

Falling Words is an educational app used to allow users to gamify practicing ones typing skills. The app will be created using HTML/CSS, vanilla JavaScript, and jQuery. The game is simple, yet engaging. Players type words before they fall to the bottom of the screen. If the player types the word correctly, he or she is awarded points. The game has levels, which increase in speed, word complexity, and words per minute. To increase the games functionality, words will also fall at different speeds and have different features.


### Functionality & MVP

With Falling Words, users will be able to:

- [ ] Start, pause, and restart the game
- [ ] Type words and phrases before they hit the bottom of the screen
- [ ] Be awarded an increasing number of points as the level of difficulty increases
- [ ] Turn off and on sound through a mute button

In addition, this project will include:

- [ ] A production README


### Wireframes

This app will have a single screen that is comprised of the game screen , game controls, and nav links. Users will type words using the keyboard and the words will disappear from the screen upon completion.


![wireframes](./docs/falling_words.jpg)


This project will be implemented with the following technologies:

- Vanilla JavaScript and `jquery` for overall structure and logic,
- HTML/CSS for rendering and graphics
- Easel.js with HTML5 Canvas for DOM manipulation and rendering,
- Webpack to bundle and serve up the various scripts.

Additionally, various scripts will be involved in this project including:

`target.js` which will handle the logic common to all falling words
`bounce.js` these words hit the bottom and bounce up, giving the player another chance at them
`zag.js` these words move about diagonally, giving the user more time to answer, while simultaneously making it more difficult to keep track of the word
`life.js` this script will render a word to fall that, if answered correctly, awards the player another life
`bomb.js` a bomb word is the opposite of a life; it detracts a life if the player answers correctly
`size.js` this will handle the different font size words will have, with smaller words receiving more points

### Implementation Timeline

**Day 1**: Setup all necessary Node modules, including getting webpack working and `Easel.js` installed. Goals for the day:

- Create the main playing field and be able to generate words

**Day 2**: Finish setting up word difficulty logic for increasing levels

- Words can fall simultaneously, but at different speeds and with other, different characteristics applied
- Finish different types of word logic

**Day 3**: Build out life and bomb words and keep track of accumulating score. Goals for the day:

- Be able to add and detract a life to the player's "lives" count
- Accurately tally and display the players ever changing score. The score will be a function of the level of difficulty, number of words, type of words, word complexity, etc.

**Day 4**: Style game and make it look nice. Goals for the day:

- All words finished
- Player can type words to neutralize them and is awarded points accurately
- Style the game well to make it intuitive and enjoyable

### Bonus Features

- [ ] A version for keyboard shortcuts
- [ ] A math version in which small math problems drop (e.g. "5 x 4")
