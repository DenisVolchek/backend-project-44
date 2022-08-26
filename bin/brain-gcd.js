#!/usr/bin/env node

import greetings from '../src/cli.js';
import gcd from '../src/games/gcd.js';

const name = greetings();

gcd(name);
