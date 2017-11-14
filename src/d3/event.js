import * as d3 from 'd3';

var svg = d3.select('body')
            .append('svg')
            .attr('width', 500)
            .attr('height', 500);
var circle = svg.append('circle')
                .attr('cx', 70)
                .attr('cy', 70)
                .attr('r', 52)
                .style('fill', 'red');
circle.on('click', function () {
    circle.attr('r', 90);
});            