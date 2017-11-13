import * as d3 from 'd3';

// var str = 'China';
// var body = d3.select('body');
// var p = body.selectAll('p');

// p.datum(str);

// p.text(function (d, i) { return `第${i}个元素绑定的数据是${d}` });

var dataset = ['I like dogs', 'I like cats!', 'I like birds!'];

var body = d3.select('body');
var p = body.selectAll('p');

p.data(dataset).text(function (d, i) { return d; });