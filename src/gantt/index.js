import * as d3 from 'd3';
require('../../styles/gantt.css');

var tasks = [  
    {
        "startDate": new Date("Sun Dec 09 01:36:45 EST 2012"),
        "endDate": new Date("Sun Dec 09 02:36:45 EST 2012"),
        "taskName": "E Job",
        "status": "FAILED"
    },
    {
        "startDate": new Date("Sun Dec 09 04:56:32 EST 2012"),
        "endDate": new Date("Sun Dec 09 06:35:47 EST 2012"),
        "taskName": "A Job",
        "status": "RUNNING"
    }];
let taskStatus = {
    "SUCCESSED": "bar",
    "FAILED": "bar-failed",
    "RUNNING": "bar-running",
    "KILLED": "bar-killed"
};
let taskNames = ["D Job", "P Job", "E Job", "A Job", "N Job"];

tasks.sort(function(a, b) {
    return a.endDate - b.endDate;
});
let maxDate = tasks[tasks.length - 1].endDate;
tasks.sort(function(a, b) {
    return a.startDate - b.startDate;
});
let minDate = tasks[0].startDate;
const format = '%H:%M';
const timeDomainString = '1day';

let gantt = d3.gantt()
                .taskTypes(taskNames)
                .taskStatus(taskStatus)
                .tickFormat(format)
                .height(450)
                .width(800);

gantt.timeDomainMode('fixed');
changeTimeDomain(timeDomainString);

gantt(tasks);

function changeTimeDomain(timeDomainString) {
    this.timeDomainString = timeDomainString;
    switch (timeDomainString) {
        case '1hr':
            format = '%H:%M:%S';
            gantt.timeDomain([d3.time.hour.offset(getEndDate() - 1), getEndDate()])
            break;
        case "3hr":
            format = "%H:%M";
            gantt.timeDomain([ d3.time.hour.offset(getEndDate(), -3), getEndDate() ]);
            break;
    
        case "6hr":
            format = "%H:%M";
            gantt.timeDomain([ d3.time.hour.offset(getEndDate(), -6), getEndDate() ]);
            break;
    
        case "1day":
            format = "%H:%M";
            gantt.timeDomain([ d3.time.day.offset(getEndDate(), -1), getEndDate() ]);
            break;
    
        case "1week":
            format = "%a %H:%M";
            gantt.timeDomain([ d3.time.day.offset(getEndDate(), -7), getEndDate() ]);
            break;
        default:
            format = "%H:%M"
    }
    gantt.tickFormat(format);
    gantt.redraw(tasks);
}
function getEndDate() {
    let lastEndDate = Date.now();
    if (tasks.length > 0) {
        lastEndDate = tasks[tasks.length - 1].endDate;
    }
    return lastEndDate;
}
function addTask() {
    var lastEndDate = getEndDate();
    var taskStatusKeys = Object.keys(taskStatus);
    var taskStatusName = taskStatusKeys[Math.floor(Math.random() * taskStatusKeys.length)];
    var taskName = taskNames[Math.floor(Math.random() * taskNames.length)];

    tasks.push({
	"startDate" : d3.time.hour.offset(lastEndDate, Math.ceil(1 * Math.random())),
	"endDate" : d3.time.hour.offset(lastEndDate, (Math.ceil(Math.random() * 3)) + 1),
	"taskName" : taskName,
	"status" : taskStatusName
    });

    changeTimeDomain(timeDomainString);
    gantt.redraw(tasks);
}
function removeTask() {
    tasks.pop();
    changeTimeDomain(timeDomainString);
    gantt.redraw(tasks);
}