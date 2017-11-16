import * as d3 from 'd3';

var nodes = [].concat(
    d3.range(80).map(function () {
        return {type: 'a'};
    }),
    d3.range(160).map(function () {
        return {type: 'b'}
    })
);
console.log(nodes);

var node = d3.select('svg')
            .append('g')
            .selectAll('circle')
            .data(nodes)
            .enter()
            .append('circle')
            .attr('r', 2.5)
            .attr('fill', function (d) {
                return d.type === 'a' ? 'brown' : 'steelblue';
            });
console.log(node);

var simuliation = d3.forceSimulation(nodes)//首先为指定的一组节点创建一个仿真simulation并且指定力学模型类型
                    .force('charge', d3.forceCollide().radius(5))//创建一个半径为5的碰撞作用力
                    .force('r', d3.forceRadial(function (d) { return d.type === 'a' ? 100 : 200; }))
                    .on('tick', ticked);            
function ticked() {
    node.attr('cx', function(d) { return d.x })
        .attr('cy', function(d) { return d.y });
}                    