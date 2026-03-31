#!/usr/bin/env node
import mainGame from '../src/index.js'
import { description, gameInfo } from '../src/games/gcd.js'

mainGame(description, gameInfo)
