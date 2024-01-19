![Logo-nav](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png)

# Kalvium PROJECT BUILDER | REACT - QUIZ STAGE I - UI

## Learning Goals

In this exercise, the goal is to learn building a complete quiz app on a stage by stage basis:

- when and how to setup react in your application,
- how to create multiple compoents and design it.

### Introduction

In this exercise, you will try to work with component and css. 

create a new react app using the following command
```
npm create vite@latest quiz
```
Then choose **React** and **javascript**.

```
cd quiz
```

Now go to your App.jsx and remove the unnecessary code. Your app.jsx should be looking similar to the this.
```
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
 
    </div>
  );
}

export default App;
```

Your task is to create three components
**- HomeComponent**
**- QuizComponent**
**- ResultComponent**

**Note: use rcc to generate the code template. Please keep everything as a static output on the stage - 1. We will make it dynamic over the course**.  

So let's get started!
Check below to see the overall output: You will be trying to replicate this

### PROGRESSION 1 | HOME COMPONENT
![Image description](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/react-quiz-home.png)

### PROGRESSION 2 | QUIZ COMPONENT
![Image description](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/react-quiz-question.png)

### PROGRESSION 3 | RESULT COMPONENT
![Image description](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/react-quiz-score.png)


## Summary

If you managed to do it, good job! :trophy:

We are proud of you!

Happy Coding ❤️!




--------------------------------------------------------------------------------------------------



![Logo-nav](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png)

# Kalvium PROJECT BUILDER | REACT - QUIZ STAGE II - DYNAMIC RENDER

## Learning Goals

In this exercise, the goal is to learn building a complete quiz app on a stage by stage basis:

- props and state,
- how to work with event handlers.
- work with json object.

## Getting started

1. Fork this repo
2. Clone this repo

Whenever you create a first significant change, you should make your first commit.

3. Follow these [guidelines to add, commit and push changes](https://github.com/Kalvium-Program/general-guidelines-labs-project-builders).

In the end of this document, you will find guidelines on how to submit the exercise.

### Introduction

We will continue to improve our code from where we left previously. We will work on the Quiz component today. We will render the data from the json file rather than keeping it 
static and we will complete the event handlers for previous, next and quit. 

**Note: use rcc to generate the code template. Please keep everything as a static output on the stage - 1. We will make it dynamic over the course**.  

So let's get started!
Check below to see the overall output: You will be trying to replicate this

![](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/quiz-two-react.gif)

### PROGRESSION 1 | KEEP IT IN AN ARRAY
Remove the static component and create a json file called as questions. An array of 15 questions is already provided to you, in this repository inside `resources/quizQuestion.json` file.


### PROGRESSION 2 | GO TO PREVIOUS
Complete the event handler for previous button such that you should dynamically go back to the previous question in the array.

### PROGRESSION 3 | JUMP TO NEXT
Complete the event handler for next button such that you should dynamically go to the next question in the array.

### PROGRESSION 4 | I WANT TO QUIT
When the user clicks the quit button, a pop-up should come stating -> `Are you sure you want to quit ?`

## Submission

If you didn't add, commit and push the changes you made, this is the last call. :smile:

please share your github links with your Mentors. Your Mentor's will check up your work and provide feedback. 


Happy Coding Kalvium ❤️!




--------------------------------------------------------------------------------------------------




![Logo-nav](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png)

# Kalvium PROJECT BUILDER | REACT - QUIZ STAGE III - Connecting Components

## Learning Goals

In this exercise, the goal is to learn building a complete quiz app on a stage by stage basis:

- props and state,
- how to work with event handlers.
- how to use routes to connect different components with each other - (how to pass states from one component to the other)

### Introduction

We will continue to improve our code from where we left previously. We will work on connecting all the components with each other.


### PROGRESSION 1 | Connect Components:

Till now, we were only working with individual components. Now is the correct time to connect them.
Here is a demo of how things should work:

![](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/project-react-routes-working.gif)


So, as you can see above -> 
If I click on play button, I should be directed to the quiz game, and if I click on `finish` button, I should be directed to result page.

***NOTE:*** Use routers to perform the task. ( Remember to install routers before importing them. )


### PROGRESSION 2 | Calculate Score:

So, once all the components are connected to each other, now is the correct time, to calculate the score as well.
So, by now, we are only able to move from one question to the other. Now, your task is to be able to click on any option and based upon the correct answer of that question, you should be able to calculate the score.

***Constraints:*** If a user clicks on a wrong option -> an alert should pop-up stating that: `wrong answer`, and
                   If a user clicks on the right option -> an alert should pop-up stating that: `correct answer`

Once you click on the `finish` button (finish button was not added previously, you need to add a new button -> which will redirect the user to the result page), you should be able to reach to the result page, which displays the result for you, as shown below:

![](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/project-react-final-working.gif)


Happy Coding ❤️!

