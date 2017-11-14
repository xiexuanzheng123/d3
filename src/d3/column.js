import * as d3 from 'd3';

var width = 400;
var height = 400;
var svg = d3.select('body')
            .append('svg')
            .attr('width', width)
            .attr('height', height);
var padding = { left: 30, right: 30, top: 30, bottom: 30 };            

var dataset = [ 10, 20, 30, 40, 33, 24, 12, 5 ];
var xScale = d3.scaleOrdinal()
                .domain(d3.range(dataset.length))
                .range([0, width - padding.left - padding.right]);

var yScale = d3.scaleOrdinal()
                .domain([0, d3.max(dataset)])
                .range([height - padding.top - padding.bottom, 0]);

var xAxis = d3.axisBottom()
                .scale(xScale);
var yAxis = d3.axisLeft()
                .scale(yScale);          
                
var rectPadding = 4;
var rects = svg.selectAll('.MyRect')
                .data(dataset)                
                .enter()
                .append('rect')
                .attr('class', 'MyClass')
                .attr('transform', 'translate(' + padding.left + ',' + padding.top + ')')
                .attr('x', function (d, i) {
                    return xScale(i) + rectPadding / 2;
                })
                .attr('y', function (d) {
                    return yScale(d);
                })
                .attr('width', xScale.range() - rectPadding)
                .attr('height', function (d) {
                    return height - padding.top - padding.bottom - yScale(d);
                });
var texts = svg.selectAll('.MyText')
                .data(dataset)
                .enter()
                .append('text')
                .attr('class', 'MyText')
                .attr('transform', 'translate(' + padding.left + ',' + padding.top + ')')
                .attr('x', function (d, i) {
                    return xScale(i) + rectPadding / 2;
                })                
                .attr('y', function (d) {
                    return yScale(d);
                })
                .attr('dx', function () {
                    return (xScale.range() - rectPadding / 2);
                })
                .attr('dy', function (d) {
                    return 20;
                })
                .text(function (d) {
                    return d;
                })
                