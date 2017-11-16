import * as d3 from 'd3';

/**
 * Simulation
 */
/**
 * 1 forceSimulation([nodes])
 * 根据指定的节点数组创建一个没有作用力的仿真，通过on来为仿真的每一次tick添加事件监听器
 * stop停止仿真，tick再次启动仿真
 */
var nodes = [].concat(
    d3.range(50).map(function () {
        return {type: 'a'};
    })
);
var simulation = d3.forceSimulation(nodes)
                .force('charge', d3.forceManyBody())//节点间的作用力
                .force('link', d3.forceLink())//连线作用力
                .force('center', d3.forceCenter());//重力
console.log(simulation);
console.log(simulation.nodes);
/**
 * 2 restart
 * 重启仿真器内部的计时器，与alphaTarget或alpha协同作用，这个方法可以用在在交互时重新启动仿真
 */
/**
 * 3 stop
 * 停止仿真内部的计时器
 */
/**
 * 4 tick
 * (alphaTarget - alpha) * alphaDecay(alpha衰减系数)来调整仿真当前的alpha值
 */
/**
 * 5 simulation.nodes([nodes])
 * 如果指定了nodes，则根据当前的nodes对象数组初始化仿真的节点初始位置和速度
 * 每个节点为一个对象类型，仿真器添加如下几个属性
 * 5-1 index
 * 5-2 x 节点当前的x
 * 5-3 y 节点当前的y
 * 5-4 vx 节点当前的x速度
 * 5-5 vy 节点当前的y速度
 */
/**
 * 6 alpha 
 * 设置或获取仿真当前的alpha值，[0, 1]
 */
/**
 * 7 alphaMin
 * 设置或获取最小的alpha值
 */
/**
 * 8 alphaDecay
 * 设置或获取衰减系数
 */
/**
 * 9 alphaTarget
 * alpha的目标值，区间为[0, 1],默认为0
 */
/**
 * 10 velocityDecay
 * 速度衰减系数[0,1],默认0.4
 */
/**
 * 11 force(name [, force])
 * 为仿真系统设置里的作用，用来修改节点的位置或速度
 * 11-1 force("charge", d3.forceManyBody())	 //节点间的作用力
 * 11-2 force("link", d3.forceLink(links))	  //连线作用力
 * 11-3 force("center", d3.forceCenter());	  //重力，布局有一个参考位置，不会跑偏
 * 11-4 force.initialize 选择性的接受仿真的节点数组
 * 11-5 force(alpha) 为力指定一个可选的alpha，作用力可以被用到通过initialize指定的节点上
 * 11-6 d3.forceCenter(x, y)centering作用力可以使得节点布局开之后围绕某个中心默认（0， 0）
 * 11-7 center.x([x])设置或者获取x坐标
 * 11-8 center.y([y])
 * 11-9 forceCollide碰撞作用力可以为节点指定一个radius区域来防止节点重合
 * 11-10 collide。radius(radius)设置一个碰撞半径，为节点设置不同的半径
 * 11-11 collide.strength([strength])设置碰撞力的强度
 * 11-12 collide.iterations 迭代次数
 * 11-13 d3.forceLink 创建link作用力
 * 11-14 links设置或获取link作用力的链接数组并重新计算distance和strength，
 *       每个link都是包含以下两个属性的对象
 *       source target index
 * 11-15 link.id 设置或者获取link中的节点的查找方式
 * 11-16 link.distance 两个节点之间的距离
 * 11-17 link.strength
 * 11-18 link.iteration
 * 11-19 d3.forceManyBody
 * 11-20 manyBody.strength强度参数
 * 11-21 theta
 * 11-22 distanceMin最小连接距离
 * 11-23 distanceMax
 * 11-24 forceX([x])创建x方向的作用力
 * 11-25 x.strength
 * 11-26 forceY
 * 11-27 y.strength
 */
/**
 * 12 find(x, y[, radius])
 * 返回离(x, y)最近的点，指定搜索半径radius，未找到返回undefined
 */
/**
 * 13 on
 * 设置或者获取事件监听器
 */