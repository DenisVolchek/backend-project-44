#!/usr/bin/env node

import greetings from '../src/cli.js';
import prime from '../src/games/prime.js';

const name = greetings();

prime(name);
