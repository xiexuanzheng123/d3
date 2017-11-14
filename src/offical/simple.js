import * as d3 from 'd3';

var data = [
    {name: 'Alice', value: 2},
    {name: 'Bob', value: 3},
    {name: 'Carol', value: 1},
    {name: 'Dwayne', value: 4}
];
var i = d3.scan(data, function (a, b) {
    return a.value - b.value;
});
console.log(data[i]);

var ticks = d3.ticks(0, 10, 5);
console.log(ticks);

