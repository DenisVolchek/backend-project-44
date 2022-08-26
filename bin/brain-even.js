#!/usr/bin/env node

import greetings from '../src/cli.js';
import evenGame from '../src/games/even.js';

const name = greetings();

evenGame(name);
