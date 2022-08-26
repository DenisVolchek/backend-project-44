#!/usr/bin/env node

import greetings from '../src/cli.js';
import progression from '../src/games/progression.js';

const name = greetings();

progression(name);
