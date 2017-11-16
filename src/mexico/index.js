import * as d3 from 'd3';

var projection = d3.geoMercator();
var path = d3.geoPath(projection);

d3.json('./mx.json', function (error, mx) {
    if (error) {
        throw error;
    }
    var states = topojson.feature(mx, mx.objects.states);
    var municipalities = topojson.feature(mx, mx.objects.municipalities);
    projection.fitSize([960, 600], states);

    d3.select('#municipalities')
        .datum(municipalities)
        .attr('d', path);
    
    d3.select('#states')
        .datum(states)
        .attr('d', path)
});