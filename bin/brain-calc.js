#!/usr/bin/env node

import greetings from '../src/cli.js';
import calcGame from '../src/calcGame.js';

const name = greetings();

calcGame(name);
