#!/usr/bin/env node
'use strict'
const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')
const args = process.argv.slice(2)

// Load questions from specified file or load default questions.
let questionsSource
const customQuestionsPath = args[0]
if (customQuestionsPath) {
  try {
    questionsSource = require('require-dir')(customQuestionsPath)
    console.log(`- Loading custom questions from: ${customQuestionsPath}`)
  } catch (e) {
    console.log('- Unable to load custom questions.', e)
    process.exit()
  }
} else {
  questionsSource = require('require-dir')('./questions')
}

const topics = []

// print ascii art
var artFile = path.join(__dirname, '/ascii-art.txt')
var art = fs.readFileSync(artFile, 'utf8')
console.info(art)

let selectedTopic
const results = {
  correct: 0,
  incorrect: 0
}

// This is a collections with all available questions for each topic
// that is used by inquirer after a topic is selected to get the
// questions for it.
const questionsMap = {}

// Set topics from available questions source.
// Each source is a JSON file with a main key which is the topic name.
// It contains an array of questions for that topic.
// This is an object that can be passed to inquierer to display elegant menues,
// where answers for each question can be selected.
Object.keys(questionsSource).map((sourceName) => {
  const topicName = Object.keys(questionsSource[sourceName])[0]

  // Add found topic.
  topics.push(topicName)

  // Add questions for current topic.
  questionsMap[topicName] = questionsSource[sourceName][topicName]
})

function displayWelcomePromp () {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'topic',
      message: 'What topic do you want to play today?',
      choices: topics
    }
  ])
}

function displayTopicQuestions ({topic}) {
  selectedTopic = topic
  const topicQuestions = questionsMap[topic]
  inquirer
    .prompt(topicQuestions)
    .then((answers) => {
      const keys = Object.keys(answers)
      keys.map((key) => {
        const result = answers[key]
        if (result) return ++results.correct
        ++results.incorrect
      })

      displayResults()
    })
}

function displayResults () {
  console.log(`
    ${selectedTopic} RESULTS:
    
    - Correct  : ${results.correct}
    - Incorrect: ${results.incorrect}
  `)
}

// Display initial prompt with topic selection.
// After a topic is selected display questions for that topic.
displayWelcomePromp().then(displayTopicQuestions)
