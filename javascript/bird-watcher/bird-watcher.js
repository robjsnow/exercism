// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
let sum = 0;
  
//birdsPerDay.forEach(element => sum += element)
  for (let i = 0; i < birdsPerDay.length; i++) {
    sum += birdsPerDay[i];
  }
  
return sum;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
let sum = 0;
let startingDay = (week - 1) * 7;
for (let i = startingDay; i < startingDay + 7; i++) {
  sum += birdsPerDay[i];
  console.log(birdsPerDay[i])
}
return sum;
  
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {

for (let i = 0; i < birdsPerDay.length; i+=2) {
birdsPerDay[i]++;
}
  return birdsPerDay;
}
