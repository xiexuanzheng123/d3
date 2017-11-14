import * as d3 from 'd3';

var dataset = [ 1.2, 2.3, 0.9, 1.5, 3.3 ];
var min = d3.scan(dataset, function (a, b) {
    return a - b;
});
var max = d3.scan(dataset, function (a, b) {
    return b - a;
});

var linear = d3.scaleLinear()
            .domain([dataset[min], dataset[max]])
            .range([0, 300]);
console.log(linear(0.9));
console.log(linear(2.3));
console.log(linear(3.3));

var index = [ 0, 1, 2, 3, 4];
var color = ['red', 'blue', 'green', 'yellow', 'black'];

var ordinal = d3.scaleOrdinal()
                .domain(index)
                .range(color);
console.log(ordinal(0));
console.log(ordinal(2));
console.log(ordinal(4));

var dataset = [ 2.5 , 2.1 , 1.7 , 1.3 , 0.9 ];
var linear = d3.scaleLinear()
                .domain([0, d3.max(dataset)])
                .range([0, 250]);
var height = 300;
var width = 300;

var svg = d3.select('body')
            .append('svg')
            .attr('width', width)
            .attr('height', height);
var rectHeight = 25;
svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('x', 20)
    .attr('y', function (d, i) {
        return i * rectHeight;
    })                        
    .attr('width', function (d) {
        return linear(d);
    })
    .attr('height', rectHeight - 2)
    .attr('fill', 'steelblue');