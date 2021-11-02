const numbers = process.argv.slice(2);

const timer = function(seconds) {
  for (let second of seconds) {
    let time = Number(second)
    if (time > 0) {
      setTimeout (() => {
        process.stdout.write('\x07');
      }, time * 1000)
    }
  }
}
timer(numbers);


   
