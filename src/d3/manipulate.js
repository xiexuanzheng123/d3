import * as d3 from 'd3';

var body = d3.select('body');
var p1 = body.select('p');
p1.style('color', 'red');

var p2 = body.select('#myid');
p2.style('color', 'green');