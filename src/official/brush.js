import * as d3 from 'd3';

var svg = d3.select('body')
            .append('svg')
            .attr('width', 300)
            .attr('height', 300);
svg.append('g')
    .attr('class', 'brush')
    .call(d3.brush().extent([[10, 10], [100, 100]]).on('brush', brushed));
function brushed() {
    console.log('event');
}           
/**
 * brush.move(group, selection)
 * selection为一个数值类型的数组[[x0,y0], [x1, y1]]
 */

 /**
  * brush.extent([extent])
  */

/**
 * brush.filter([filter])
 */
/**
 * brush.on(typenames, [listener])
 * typenames可以是
 * start 开始brush操作
 * brush 拖动brush区域进行选取
 * end 选取结束
 */