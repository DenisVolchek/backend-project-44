#!/usr/bin/env node
import readline from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');

  const userName = readline.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);
};
