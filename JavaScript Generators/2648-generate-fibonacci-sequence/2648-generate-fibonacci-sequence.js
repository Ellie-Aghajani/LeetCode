/**
 * 2648. Generate Fibonacci Sequence

Write a generator function that returns a generator object which yields the fibonacci sequence.

The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2.

The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13.

Use a generator to produce one Fibonacci number each time .next() is called.

Generator + two variables (prev, current) to keep track of the last two numbers in the sequence.
 
 * @return {Generator<number>}
 */

var fibGenerator = function* () {
  //function* creates a generator function
  let prev = 0;
  let current = 1;

  while (true) {
    // keeps generating forever
    yield prev; //yield returns one value and pauses

    const next = prev + current;
    prev = current;
    current = next;
  }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0      // .next() asks the generator for the next value
 * gen.next().value; // 1
 */
