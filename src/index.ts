import { validateFxn } from './helpers.js';
import { Coco } from 'chroma-console';

const data: number[] = [1, 2, 3, 4, 5];

function main(nums: number[], target: number): number[] {
    const map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const currentNumber = nums[i];
        const diff = target - currentNumber;
        if (map.has(diff)) {
            return [map.get(diff)!, i];
        } else {
            map.set(currentNumber, i);
        }
    }
}

Coco.setColor('firewood');
Coco.start();
const value = main(data, 9);
Coco.log(value);
Coco.end();

export {};
