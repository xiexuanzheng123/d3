import * as d3 from 'd3';

var p = d3.select('body').selectAll('p').text('www.decembercafe.org');
p.style('color', 'red').style('font-size', '72px');