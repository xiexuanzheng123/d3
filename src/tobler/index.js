import * as d3 from 'd3';
import * as topojson from 'topojson';

var svg = d3.select('svg');
var width = svg.attr('width');
var height = svg.attr('height');

var projection = d3.geoProjection(toblerMercatorRaw)
    .scale((width - 3) / (2 * Math.PI))
    .translate([width / 2, height / 2])
    .precision(0.1);

var path = d3.geoPath()
    .projection(projection);

var graticule = d3.geoGraticule();

svg.append('defs')
    .append('path')
    .datum(graticule.outline())
    .attr('id', 'sphere')
    .attr('d', path);

svg.append('use')
    .attr('class', 'stroke')
    .attr('xlink:href', '#sphere');
    
svg.append('use')
    .attr('class', 'fill')
    .attr('xlink:href', '#sphere');
    
svg.append("path")
    .datum(graticule)
    .attr("class", "graticule")
    .attr("d", path);
    
d3.json("https://unpkg.com/world-atlas@1/world/50m.json", function(error, world) {
    if (error) throw error;
    
    svg.insert("path", ".graticule")
        .datum(topojson.feature(world, world.objects.land))
        .attr("class", "land")
        .attr("d", path);
    
    svg.insert("path", ".graticule")
        .datum(topojson.mesh(world, world.objects.countries, function(a, b) { return a !== b; }))
        .attr("class", "boundary")
        .attr("d", path);
});
    
function toblerMercatorRaw(lambda, phi) {
    var cosPhi = Math.cos(phi);
    // return [lambda * cosPhi * cosPhi, Math.log(Math.tan((Math.PI / 2 + phi) / 2))];
    return [lambda, Math.log(Math.tan(Math.PI/4 + phi / 2))];
}    