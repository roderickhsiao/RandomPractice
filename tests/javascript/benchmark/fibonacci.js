import Beanchmark from 'benchmark';

import getFibonacci from '../../../javascript/problems/fibonacci';
import getFibonacciDP from '../../../javascript/problems/fibonacciDP';

var suite = new Beanchmark.Suite;

suite
.add('fibonacci', () => getFibonacci(20))
.add('fibonacciDP', () => getFibonacciDP(20))
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });

// fibonacci   x   4,846 ops/sec ±2.18% (76 runs sampled)
// fibonacciDP x 664,805 ops/sec ±1.74% (76 runs sampled)
