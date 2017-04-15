# knowledge-quest 

[![Build Status](https://travis-ci.org/codealchemist/knowledge-quest.svg?branch=master)](https://travis-ci.org/codealchemist/knowledge-quest)

Answer multiple choice questions and get a result of how well you did it.

```
  _                        _          _                                        _
 | | ___ __   _____      _| | ___  __| | __ _  ___        __ _ _   _  ___  ___| |_
 | |/ / '_ \ / _ \ \ /\ / / |/ _ \/ _` |/ _` |/ _ \_____ / _` | | | |/ _ \/ __| __|
 |   <| | | | (_) \ V  V /| |  __/ (_| | (_| |  __/_____| (_| | |_| |  __/\__ \ |_
 |_|\_\_| |_|\___/ \_/\_/ |_|\___|\__,_|\__, |\___|      \__, |\__,_|\___||___/\__|
                                        |___/               |_|

? What topic do you want to play today? JavaScript
? Select a proper implementation for promises in NodeJS: new Promise((resolve, reject) => {...})
? When does the event loop runs in the browser? Always.

    JavaScript RESULTS:

    - Correct  : 2
    - Incorrect: 0
```

## How it works?

**knowledge-quest** reads JSON questions files in a directory and it constructs a topics menu from 
the main key in each JSON file.
When the app starts it displays the topics menu.
After the user selects a topic it starts displaying all available questions for that topic, one after the other.
By default all questions are multiple choice and the user can select an answer from a list.
After all questions are answered the results are shown, displaying how many questions where answered correctly
and how many were wrong.

## Install

`npm install -g knowledge-quest`

## Run

`knowledge-quest`

## Adding questions

Just run the app passing the path to your questions folder as first argument:

`knowledge-quest [path-to-yout-questions-folder]`

It will read all the question files in the directory, construct the topics menu for each file 
and once the user selects a topic display all available questions for it.

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
