#!/usr/bin/env node
import runGame from '../src/index.js';
import { getQuestionAndAnswer, gameRule } from '../src/games/even.js';

runGame(gameRule, getQuestionAndAnswer);