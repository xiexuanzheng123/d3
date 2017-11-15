import * as d3 from 'd3';
var randomX = d3.randomUniform(0, 10);//返回一个uniform distribution的随机函数生成器 [0, 10)
var randomY = d3.randomNormal(0.5, 0.12);//返回一个高斯分布的随机生成器，期望值为0.5，标准差为0.12
var data = d3.range(800).map(function () {//range只有一个参数的时候是end，也是返回的个数
    return [ randomX(), randomY() ];
});
console.log(data);

var svg = d3.select('svg');
var margin = {top: 194, right: 50, bottom: 214, left: 50};
var width = +svg.attr('width') - margin.left - margin.right;
var height = +svg.attr('height') - margin.top - margin.bottom;
//g是group的简写，是用来分组用的，可以把多个元素放在一组里，对g标记实施的样式和渲染会作用到这个分组内的所有元素
var g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

var x = d3.scaleLinear()
        .domain([0, 10])
        .range([0, width]);
var y = d3.scaleLinear()
        .range([height, 0]);
var brush = d3.brushX()//x方向的brush
                .extent([[0, 0], [width, height]])//brush的左上角和右下角坐标
                .on('start brush', brushed);
var dot = g.append('g')
            .attr('fill-opacity', 0.2)
            .selectAll('circle')
            .data(data)
            .enter()
            .append('circle')
            .attr('transform', function (d) { return 'translate(' + x(d[0]) + ',' + y(d[1]) + ')'; })
            .attr('r', 3.5);
g.append('g')
    .call(brush)
    .call(brush.move, [3, 5].map(x))
    .selectAll('.overlay')//使用overlay矩形来表示brush的范围brush.extent
    .on('mousedown touchstart', beforebrushed, true);
g.append('g')
    .attr('transform', 'translate(0, ' + height  + ')')
    .call(d3.axisBottom(x));

function beforebrushed () {
    d3.event.stopImmediatePropagation();
    d3.select(this.parentNode).transition().call(brush.move, x.range());
}

function brushed () {
    var extent = d3.event.selection.map(x.invert, x);
    dot.classed('selected', function (d) {
        return extent[0] <= d[0] && d[0] <= extent[1];
    })
}            