import * as d3 from 'd3';

/**
 * selection.datum([value])
 * 获取选中的元素的数据或者为选中的元素绑定数据，与selection.data不同，这个方法不去计算数据元素和DOM元素的结合
 * 不影响索引或enter和exit集合
 * 
 * 
 */
var select = d3.select('body').selectAll('li');
select.datum(function() { return this.dataset });
console.log(select);