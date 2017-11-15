import * as d3 from 'd3';

/**
 * Continuous
 * 1-1 Linear
 * 1-2 Power
 * 1-3 Log
 * 1-4 Identity
 * 1-5 Time
 */
var dataset = [ 2.5 , 2.1 , 1.7 , 1.3 , 0.9 ];
var scale = d3.scaleLinear()
                .domain([0, d3.max(dataset)])
                .range([0, 250]);
var axis = d3.axisLeft(scale);
d3.select('body').append('svg')
    .attr('class', 'axis')
    .attr('width', 240)
    .attr('height', 300)
    .append('g')
    .attr('transform', 'translate(40, 30)')
    .call(axis);

var x = d3.scaleLinear()
            .domain([10, 130])
            .range([0, 960]);
console.log(x(20));     

var color = d3.scaleLinear()
                .domain([10, 100])
                .range(['brown', 'steelblue']);
console.log(color(20));
/**
 * invert如果domain和range都是数字，则可以逆运算
 */      
console.log(x.invert(80));//20
/**
 * domains
 * caleLinear创建一个默认的线性比例尺，domain默认值为[0, 1],range默认值为[0, 1]
 */
/**
 * clamp如果指定了clamp为true,则当输入数据超过domain，输出值不会超出预定义的range
 */
console.log(x(-10));//-160
x.clamp(true);
console.log(x(-10));//0

