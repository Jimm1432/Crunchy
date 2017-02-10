'use strict';
import os = require('os');

export function error(str: string)
{
  /* Do fancy output */
  console.error(' \x1B[1;31m* ERROR\x1B[0m: ' + str);
}

export function info(str: string)
{
  /* Do fancy output */
  console.log(' \x1B[1;32m* INFO \x1B[0m: ' + str);
}

export function debug(str: string)
{
  /* Do fancy output */
  console.log(' \x1B[1;35m* DEBUG\x1B[0m: ' + str);
}

export function warn(str: string)
{
  /* Do fancy output */
  console.log(' \x1B[1;33m* WARN \x1B[0m: ' + str);
}

export function dispEpisode(name: string, status: string, addNL: boolean)
{
  /* Do fancy output */
  process.stdout.write(' \x1B[1;33m> \x1B[37m' + name + '\x1B[0m : \x1B[33m' + status + '\x1B[0m\x1B[0G');

  if (addNL)
  {
    console.log('');
  }
}