import * as d3 from 'd3';
require('../../styles/axios.css');

var dataset = [ 2.5 , 2.1 , 1.7 , 1.3 , 0.9 ];
var linear = d3.scaleLinear()
                .domain([0, d3.max(dataset)])
                .range([0, 250]);
var body = d3.select('body');
var svg = body.append('svg').attr('width',1000).attr('height',400);
svg.append('rect')
    .attr('x', 30)
    .attr('y', 60)
    .attr('width', 150)
    .attr('height', 23);
                    
var axios = d3.axisBottom(linear);
svg.append('g')
    .attr('class', 'axios')
    .attr('transform', 'translate(20, 0)')
    .call(axios);               