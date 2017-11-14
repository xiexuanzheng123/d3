import * as d3 from 'd3';
var myFish = [1, 2, 4, 5];
myFish.splice(2, 0, 3);//返回被删除的元素组成的数组

console.log(myFish);

/**
 * 1 Statistics
 * 1-1 min
 * 1-2 max
 * 1-3 extent获取最大值和最小值
 * 1-4 mean平均值
 * 1-5 median
 * 1-6 quantile分位
 * 1-7 variance方差 
 * 1-8 deviation标准差
 */
var data = [1, 3, 4, 5, 6];
console.log(d3.extent(data));//[1, 6]
console.log(d3.mean(data));//3.8
console.log(d3.median(data));//4

var a = [0, 10, 30];
console.log(d3.quantile(a, 0));//0
console.log(d3.quantile(a, 0.5));//10
console.log(d3.quantile(a, 1));//30
console.log(d3.quantile(a, 0.25));//5
console.log(d3.quantile(a, 0.75));//20
console.log(d3.quantile(a, 0.1));//2

var a = [0, 10, 20];
console.log(d3.variance(a));

console.log(d3.deviation(a));

/**
 * Search方法
 * 1-1 scan返回索引
 */
var array = [{foo: 42}, {foo: 91}];
console.log(d3.scan(array, function (a, b) {
    return a.foo - b.foo;
}));
