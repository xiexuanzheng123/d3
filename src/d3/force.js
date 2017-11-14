import * as d3 from 'd3';

var nodes = [ { name: "桂林" }, 
              { name: "广州" },
              { name: "厦门" }, 
              { name: "杭州" },
              { name: "上海" }, 
              { name: "青岛" },
              { name: "天津" } 
            ];

var edges = [ { source : 0 , target: 1 } , 
              { source : 0 , target: 2 } ,
              { source : 0 , target: 3 } , 
              { source : 1 , target: 4 } ,
              { source : 1 , target: 5 } , 
              { source : 1 , target: 6 } 
            ];

var force = d3.force()
                .nodes(nodes)
                .links(edges)
                .size([ width * height ])        