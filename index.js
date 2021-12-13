import { createPatch } from 'diff';
import * as fs from 'fs';

const content1 = fs.readFileSync('./content1.txt').toString();
const content2 = fs.readFileSync('./content2.txt').toString();
const start = Date.now();
console.log(`createPatch start with input strings of length ${content1.length} and ${content2.length}`);
console.log(createPatch('parser.c', content1, content2));
console.log(`createPatch took ${Date.now() - start} ms`);