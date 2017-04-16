# knowledge-quest 

[![Build Status](https://travis-ci.org/codealchemist/knowledge-quest.svg?branch=master)](https://travis-ci.org/codealchemist/knowledge-quest)

Answer multiple choice questions and get a result of how well you did it.

![screenshot](https://cldup.com/eX_Sz0V-IV.gif)


## How it works?

**knowledge-quest** reads JSON question files in a directory and it constructs a topics menu from 
the main key in each JSON file.
When the app starts it displays the topics menu.
After the user selects a topic it starts displaying all available questions for that topic, one after the other.
By default all questions are multiple choice and the user can select an answer from a list.
After all questions are answered the results are shown, displaying how many questions where answered correctly and how many were wrong.


## Install

`npm install -g knowledge-quest`


## Run

`knowledge-quest`


## Adding questions

Just run the app passing the path to your questions folder as first argument:

`knowledge-quest [absolute-path-to-your-questions-folder]`

It will read all the question files in the directory, construct the topics menu for each file 
and once the user selects a topic display all available questions for it.


## Question files

Question files are normal JSON files.

Expected file structure is:

```
{
  "Topic title": [] <-- questions array
}
```

_'Topic title'_ is what the user will see in the interactive menu.


## Question format

Each question is a plain JavaScript object.
Expected structure:

```
{
  "type": "list",
  "name": "A unique name for this question",
  "message": "The question you want to ask",
  "choices": [
    {
      "name": "An answer, the correct one, note the value below.",
      "value": true
    },
    {
      "name": "An answer, incorrect one.",
      "value": false
    },
    {
      "name": "Another incorrect answer.",
      "value": false
    }
  ]
}
```

*IMPORTANT:* If you have repeated question names the final count won't be correct!
Answering questions with repeated names will overwrite previous count for that question name.


## Sample questions file

```
{
  "JavaScript": [
    {
      "type": "list",
      "name": "promises",
      "message": "Select a proper implementation for promises in NodeJS:",
      "choices": [
        {
          "name": "new Promise((resolve, reject) => {...})",
          "value": true
        },
        {
          "name": "Promise((resolve, reject) => {...})",
          "value": false
        },
        {
          "name": "const promise = new Promise(); promise.resolve(true)",
          "value": false
        }
      ]
    },
    {
      "type": "list",
      "name": "event-loop",
      "message": "When does the event loop runs in the browser?",
      "choices": [
        {
          "name": "Always.",
          "value": true
        },
        {
          "name": "Once each time a function is excecuted.",
          "value": false
        },
        {
          "name": "After each line of code is read by the interpreter.",
          "value": false
        }
      ]
    }
  ]
}
```


## Reference

**knowledge-quest** uses [inquirer](https://github.com/sboudrias/Inquirer.js) 
to display awesome interactive menues in the console.

You should refer to its documentation if you want to construct a specific interface.

Enjoy!
