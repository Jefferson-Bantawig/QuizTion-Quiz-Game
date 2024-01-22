# QuizTion - The General Knowledge Quiz Game

![Website Mockup](assets/readme/quiztion-responsive-image.png)

# Overview

QuizTion is an exciting and fun quiz game that challenges its users on their general knowledge. This Quiz site is for people who want to who are interested in testing themselves on the general topics of the world.

This website is to be passed as my second Project portfolio for Code Institutes Fullstack development course.

[Click here to view live website](https://jefferson-bantawig.github.io/QuizTion-Quiz-Game/)

## Core Purposes of the website

This website is made for people who want to challenge themselves on the general topics of the world. Users will be able show off their knowledge and also learn from all the carefully curated questions. The questions on this website were meticulously crafted to provide users with a though-provoking challenge, designed to give unexpected answers.

# UX Design

## User Stories

### As a first time user

- I want to see a unique and uniform design and color scheme.
- I want a responsive site that will accomodate all screen sizes.
- I want buttons that work as they are supposed to.
- I want a how to play section that gives instructions on how to play the game.
- I want to get an indication as to what question I am currently and and how many questions i have left.
- I want to be able to see my score during and after the quiz.
- I want to see an indication on whether i got a correct or wrong answer.
- I want to see a leaderboard feature to which i can add my own name if i get a high score.

### As a returning user

- I want to experience a refreshed and randomized order of questions in each game to prevent memorization and maintain the element of surprise.
- I want the option to view the leaderboard and see the current top scorers.
- I want the site to be compatible to different devices in times i want to play on the go.

### This Website will be accessible to all devices and screens

# Structure

## Landing page

- Uses the visually appealling color combination of Salmon and Teal colors to provide a sense of sophitication and warmth.
- Provides a minimalist design that features just 2 buttons, eliminating unnecessary complexity and a straighforward experience.
- Contains a modal feature that pops up, containing a set of instructions when the "how to play" button is clicked.

### User Goal

  > - Appreciate the unique design of the site.
  > - Seamless and straighforward user experience.
  > - Easy access to the start game and instructions menu.
  > - Short and concise set of instructions.

### Website Goal  
  
  > - Captivate the player by using warm and sophisticated color patterns and design.
  > - Eliminate overcomplexity in the design to focus more on the purpose of the website.
  > - Provide a pop up modal feature that users can click to read the instructions on how to play the game.
  > - A responsive design that accomodates different screen sizes.

### Title Section

- The title section is strategically placed centered and at the top of the page.
- The bold and eye-catching design draws the users eyes immediately to the name of the quiz game.
- The choice of adding a stroke around the text adds a more impactful effect to the user.
- A small sentence is found underneath the header. This gives the users a small description of what to expect from the website.
- The box shadow around the title section makes the title pop and give a 3 Dimensional feel.
- Two buttons following the design of the title section are placed in the game menu section.
- A hover style is added to the buttons. The opacity of the buttons changes during hovering to give the user a more interactive feel.
- A pointer was also assign to prompt the user that the buttons are clickable.
- A modal feature is added in the how to play button.
- The modal pops up as the button is clicked and displays the instructions on how to play the game.
- The teal color accent of the instructions heading was a stylistic choice of the programmer.
- The modal contains a set of text that instructs the users how the quiz is played. The "QuizTion" words are purposefully designed differently to add emphasis to the quiz's name.
- A close button is located at the buttom of the modal for easy access in closing the modal.
- The modal takes approximately 50% of the whole viewport, dimming the remaining area outside the modal. Upon closing the modal, the dimming effect is lifted.
- A border and border-radius around the modal makes it consistent with the design of the website.

## Game Page

### User Goals
  
  > - Get feedback when getting correct and wrong anwers.
  > - Know what question I am currently on and how many more I have left.
  > - Have a score tracker to monitor how well I am doing with the quiz.
  > - A quit button to click that ends the game whenever I want to.

### Website Goals
  >
  > - Provide a randomized set of questions everytime to maintain the element of surprise.
  > - Provide a progress bar feature to help the user track their progress during the quiz.
  > - Stimulate the users brain by providing challenging questions that require a bit of thinking.
  > - Provide a sophisticated design that helps to keep user engaged the whole time.

### Game Section

- The game section is set to reveal upon clicking the Start button, utilizing CSS display styling toggling between "block" and "none." This approach minimizes any lag time between the button click and the display of the questions.
- The top part of the game section contains the progress bar. The bar progresses with each displayed question. This gives the user an idea on how they are progressing throughout the game.
- Inside the progress bar is the score counter. Starting from zero, the user can track their score as they progress through the game. This score counter will dynamically change as the user selects the correct answer, and will remain the same if they choose the wrong one.
- Below the progress bar is the term "QuezTion" along with the question number. This play on words combines the word "question" and a playful twist on the websites name, "QuizTion". This is done in hopes to provide a lighthearted moment from the user.
- Under the question number is the actual question. The smokey white color helps it pop but not overshadow the other texts on the screen.
- These questions were programmed to give a random sequence of question evertime, this is done to help maintain an element of surprise.
- Each choices in the choices section is contained in a retangle box. Labeled from a to d, each letter corresponds to a specific answer that the user can click.
- A hover animation is added to the choices. When a choice is hovered, it elevates upward and is given a subtle boxshadow in order to make and interactive experience.
- A question tracker can be seen in small black print under the choices section. This gives the information on what question the user is on and how many more will they have to answer.
- Two buttons can be seen at the bottom of the viewport, a home button with a favicon of a house, and a Quit button, each located at opposite corners of the page.
- The home button takes the user back to the landing page, and the quit button links to the highscores page.
- A color effect is added, if a player selects the correct answer the background of the whole page will change to a green color, and a wrong answer will trigger a red color. This adds a visual feedback and maintains user engagement.

## Results Page

### User Goals
  
  > - A result page that shows me my final score.
  > - An input that allows me to add my name and save my scores.
  > - Buttons in the result page that can record and view highscores.
  > - A button that allows me to play again.

### Website Goals
  
  > - Provide a results page where users can see and add their names and scores.
  > - The highscore leaderboard feature provides a sense of competition between users, where only the top 5 highest scorers are featured.
  > - A clickable button allowing the player to play a new game.

### Results Section

- The results section follows the design of the landing page, with a heading section containing the name of the website. This adds a sense of uniformity throughout the site.
- Underneath is a section displaying the players score, which corresponds to how many correct answers they got.
- The user is given an input box, where they can enter their name and save their score to get placed in the leaderboard.
- Three buttons are located at the very bottom of the container. Save score, Highscore, and Play again.
- The Save button is programmed to be disabled if the user does not input their name, once an input is added, this will then save the players name and score and add it to the leaderboard.
- Highscore button links the player to the highscores page.
- The Play again button links the player back to the landing page.

## Highscore Page

### User Goals
 
 > - See a consistent design and color scheme throughout the whole game.
 > - Have a leaderboard section that features the highest scoring players.
 > - A button that will take me back to the start of the page.

### Website Goals

> - Provide a consistent and uniformed color palette and design throughout,
> - Add a highscore feature that saves the users scores and features 5 of the highest scoring players.
> - A home button that links the user back to the start of the game, and be able to start a fresh game.

### Leaderboard Section

- This section follows a uniform design with the rest of the site.
- The heading section contains the words "Top Players" that showcases the names and scores of the top 5 highest scoring players.
- This adds a sense of competition between the users, motivating them to strinve for a spot in the top 5 of the leaderboard.
- Under the heading is the actual list of players that have the highest scores.
- Listed from 1 - 5, with the highest score being placed at number 1.
- A home button placed at the bottom of the page takes the player back to the start of the game.

## Design

QuizTion is tailored for individuals seeking to challenge their knowledge across various global subjects. It caters to those with a competitive spirit, providing an opportunity to etch their name at the summit of the leaderboards.
