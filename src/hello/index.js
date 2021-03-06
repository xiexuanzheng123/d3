import * as d3 from 'd3';

var words = "Hello, it’s me\nI was wondering if after all these years you’d like to meet\nTo go over everything\nThey say that time’s supposed to heal ya\nBut I ain’t done much healing\n\nHello, can you hear me\nI’m in California dreaming about who we used to be\nWhen we were younger and free\nI’ve forgotten how it felt before the world fell at our feet\n\nThere’s such a difference between us\nAnd a million miles\n\nHello from the other side\nI must have called a thousand times\nTo tell you I’m sorry for everything that I’ve done\nBut when I call you never seem to be home\n\nHello from the outside\nAt least I can say that I’ve tried\nTo tell you I’m sorry for breaking your heart\nBut it don’t matter it clearly doesn’t tear you apart anymore\n\nHello, how are you?\nIt’s so typical of me to talk about myself I’m sorry\nI hope that you’re well\nDid you ever make it out of that town where nothing ever happened\n\nIt’s no secret that the both of us\nAre running out of time\n\nSo hello from the other side\nI must have called a thousand times\nTo tell you I’m sorry for everything that I’ve done\nBut when I call you never seem to be home\nHello from the outside\nAt least I can say that I’ve tried\nTo tell you I’m sorry for breaking your heart\nBut it don’t matter it clearly doesn’t tear you apart anymore\n\nOoooohh, anymore\nOoooohh, anymore\nOoooohh, anymore\nAnymore\n\nHello from the other side\nI must have called a thousand times\nTo tell you I’m sorry for everything that I’ve done\nBut when I call you never seem to be home\nHello from the outside\nAt least I can say that I’ve tried\nTo tell you I’m sorry for breaking your heart\nBut it don’t matter it clearly doesn’t tear you apart anymore".split(/\s+/g);
var canvas = document.querySelector('canvas');
var canvas2 = canvas.cloneNode();
var context = canvas.getContext('2d');
var context2 = canvas2.getContext('2d');
var width = canvas.width;
var height = canvas.height;

context.font = context2.font = '300px Helvetica Neue';
context.textAlign = context2.textAlign = 'center';
context.lineJoin = context2.lineJoin = 'round';

(function next() {
    var i = 0.5;
    var text = words.shift();
    context.clearRect(0, 0, width, height);//在给定矩形内清空一个矩形
    context.fillText(text, width / 2, height / 2 + 100);//给定位置上输出文本
    var timer = d3.timer(function() {
        if(++i > text.length * 20) {
            return timer.stop(), next();//不懂这个
        }
        context2.save();
        context2.clearRect(0, 0, width, height);
        context2.lineWidth = i & 1 ? i * 5 + 3 : i * 5;//与运算
        context2.strokeStyle = i & 1 ? 'white' : 'black';
        context2.strokeText(text, width / 2, height / 2 + 100);
        context2.restore();
        context2.drawImage(canvas, 0, 0);
        context.drawImage(canvas2, 0, 0);
    });
})();