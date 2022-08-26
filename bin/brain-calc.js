#!/usr/bin/env node

import greetings from '../src/cli.js';
import evenGame from '../src/calcGame.js';

const name = greetings();

evenGame(name);
