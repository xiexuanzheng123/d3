import * as d3 from 'd3';

var svg = d3.select('body')
            .append('svg')
            .attr('width', 500)
            .attr('height', 500);
var circle1 = svg.append('circle')
                .attr('cx', 100)
                .attr('cy', 100)
                .attr('r', 45)
                .style('fill', 'green');
circle1.transition()
        .duration(2000)
        .ease(d3.easeLinear)
        .attr('cx', 300)
        .style('fill', 'red')
        .attr('r', 25);
            