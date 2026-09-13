#!/usr/bin/env node

import runGame from '../src/index.js';
import { getQuestionAndAnswer, gameRule } from '../src/games/calc.js';

runGame(gameRule, getQuestionAndAnswer);