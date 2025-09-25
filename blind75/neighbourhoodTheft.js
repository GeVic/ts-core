"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number[]} numbers
 * @return {number}
 */
/// <reference lib="es2015" />
function neighborhoodTheft(numbers) {
    // using dp
    var dpArray = new Array(numbers.length).fill(-1);
    var ans;
    var robHouse = function (i) {
        if (i > numbers.length - 1)
            return 0;
        if (dpArray[i] > -1)
            return dpArray[i];
        ans = Math.max(robHouse(i + 2) + numbers[i], robHouse(i + 1));
        dpArray[i] = ans;
        return ans;
    };
    return robHouse(0);
}
exports.default = neighborhoodTheft;
console.log(neighborhoodTheft([1, 2, 3, 1]));
