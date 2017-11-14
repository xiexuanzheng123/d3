import * as d3 from 'd3';

// var dataset = [ 3, 6, 9, 12, 15 ];
// var p = d3.select('body').selectAll('p');

// var update = p.data(dataset);
// var enter = update.enter();
// update.text(function (d) {
//     return 'update ' + d;
// });
// enter.append('p')
//         .text(function (d) {
//             return 'enter ' + d;
//         });

var dataset = [ 3 ];
var p = d3.select('body').selectAll('p');
var update = p.data(dataset);
var exit = update.exit();
update.text(function (d) {
    return 'update ' + d;
});
exit.append('p')
    .text(function (d) {
        return `exit`;
    });        