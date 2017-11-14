import * as d3 from 'd3';

var height = 300;
var width = 300;

var svg = d3.select('body')
            .append('svg')
            .attr('width', width)
            .attr('height', height);

var dataset = [ 250, 210, 170, 130, 90 ];
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
        return d;
    })
    .attr('height', 23)
    .attr('fill', 'steelblue');