import { validateFxn } from './helpers.js';
import { Coco } from 'chroma-console';

const data: number = 12321;

function main(number: number): boolean {
    if (number < 0) {
        return false;
    }

    const reverseNumber = number
        .toString()
        .split('')
        .reverse()
        .join('')
        .toString();

    return number.toString() === reverseNumber;
}

Coco.setColor('firewood');
Coco.start();
const value = main(data);
Coco.log('output - ' + value);
Coco.end();

export {};
