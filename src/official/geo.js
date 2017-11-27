import * as d3 from 'd3';

var projection = d3.geoAlbers();
var path = d3.geoPath(projection);//地理路径生成器
/**
 * path(object[, arguments...])
 * 渲染指定的对象
 * 
 */
var graticule = d3.geoGraticule();
var svg = d3.select('svg');
svg.append('path')
    .datum(graticule.outline())
    .attr('d', d3.geoPath());

/**
 * 1 path.area(object)
 * 2 path.bounds(object)
 * 3 
 */
