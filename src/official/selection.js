import * as d3 from 'd3';

/**
 * 返回当前选择集的方法使用四个空格，返回新的选择集使用两个空格
 */
// d3.select('body')//顶级选择器
//   .append('svg')
//     .attr('width', 960)
//     .attr('height', 500)
//   .append('g')
//     .attr('transform', 'translate(20, 20)')
//   .append('rect')
//     .attr('width', 920)
//     .attr('height', 460);
    
/**
 * select仅仅选择第一个匹配的元素
 * selectAll选中所有的匹配元素
 */
// console.log(d3.selection);
d3.selectAll('p').on('click', function() {
    d3.select(this).style('color', 'red');//this选中当前的元素
});
d3.selectAll('p').select('b').style('color', 'green');
/**
 * selector是一个方法，它会在已经选中的每个元素上调用一次，并传递当前元素的数据(d),索引(i)
 */
var previous = d3.selectAll('p').select(function() {
    return this.previousElementSibling;
});
/**
 * selection.selectAll
 */
var b = d3.selectAll('p').selectAll('b');
console.log(b);
var sibling = d3.selectAll('p').selectAll(function() {
    return [
        this.previousElementSibling,
        this.nextElementSibling
    ];
});
console.log(sibling);
/**
 * selection.filter
 */
var even = d3.selectAll('tr').filter(':nth-child(even)');

/**
 * selection.merge
 */

 /**
  * d3.matcher
  */

//var div = selection.filter('div');
//var div = selection.filter(d3.matcher('div'));

//Modifying Elements
d3.select('body').select('b').classed('foo bar', true);
d3.select('body').classed('foo', function() {return Math.random() > 0.5;})
/**
 * form表单的text元素值以及CheckBox的checked属性，都要使用property来设置
 */
/**
 * append后面添加
 * insert前面添加
 */

 /****************************************
  *             Joining data
  **************************************/
/**
 * selection.data([data[, key]])
 * 将数组类型的data与选择集中的元素绑定，返回一个update集
 * key方法可以控制哪个数据元素对应哪个DOM元素
 */
var matrix = [
    [11975, 5871, 8916, 2868],
    [1951, 10048, 2060, 6171],
    [8010, 16145, 8090, 8045],
    [1013, 990, 940, 6907]
];
var tr = d3.select('body')
            .append('table')
            .selectAll('tr')
            .data(matrix)
            .enter()
            .append('tr');
var td = tr.selectAll('td')
            .data(function(d) {return d;})
            .enter()
            .append('td')
            .text(function(d) {return d;});    

var data = [
    {name: "Locke", number: 4},
    {name: "Reyes", number: 8},
    {name: "Ford", number: 15},
    {name: "Jarrah", number: 16},
    {name: "Shephard", number: 31},
    {name: "Kwon", number: 34}
];
d3.selectAll('div')
    .data(data, function(d) { return d ? d.name : this.id; })
    .text(function(d) { return d.number; });
    
/**
 * Handling Events
 * 1 selection.on(typenames[, listener[, capture]])
 * 添加或移除选择集中的每个元素上事件类型为typenames的事件
 * selection.dispacth(type[, paraneters])
 * 
 */    