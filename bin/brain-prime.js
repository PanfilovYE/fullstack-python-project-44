#!/usr/bin/env node

import runGame from '../src/index.js';
import { getQuestionAndAnswer, gameRule } from '../src/games/prime.js';

runGame(gameRule, getQuestionAndAnswer);