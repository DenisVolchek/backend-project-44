#!/usr/bin/env node

import greetings from '../src/cli.js';
import gcd from '../src/gcdGame.js';

const name = greetings();

gcd(name);
