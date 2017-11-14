import * as d3 from 'd3';

var svg = d3.select('body')
            .append('svg')
            .attr('width', 500)
            .attr('height', 500);

var dataset = [30, 10, 43, 55, 13];
var pie = d3.pie();
var piedata = pie(dataset);

var outerRadius = 150;
var innerRadius = 0;
var arc = d3.arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius);

            var width = 10;
var arcs = svg.selectAll('g')
                .data(piedata)
                .enter()
                .append('g')
                .attr('transform', 'translate(' + (width / 2) + ',' + (width / 2) + ')');
arcs.append('path')
    .attr('fill', function (d, i) {
        return color[(i)];
    })                
    .attr('d', function (d) {
        return arc(d);
    });
var color = d3.scaleOrdinal(["#74F590", "#F56464", "#64BCF5"]);