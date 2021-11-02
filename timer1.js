process.stdout.write('\x07');

// have to slice(2) to take off first two lines of argv
// edge cases we want to filter out:
//  no numbers are provided - shouldn't beep at all
//  negative numbers - ignore/skip
//  NaN - ignore/skip
// we want to sort the time/command line args
// convert command line args to 1000's
// setTimeout with  process.stdout.write('\x07');

let timer = function(seconds) {
  for (let second of seconds) {

  }
}
setTimeout (() => {
  process.stdout.write('\x07');
}, second * 1000)