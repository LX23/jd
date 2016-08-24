/**
 * Created by hxsd on 2016/7/6.
 */
function getStyle(obj, name){
    var value=obj.currentStyle ? obj.currentStyle[name]:getComputedStyle(obj, false)[name];
    if(name=='opacity'){
        value=Math.round(parseFloat(value)*100);
    }
    else{
        value=parseInt(value);
    };
    return value;
};

function hxsd_move(obj,moveMode,end,stopTime){
    //起点
    console.log(arguments[2]);
    var start=getStyle(obj, moveMode);
    //总距离=终点—起点
    var dis=end-start;
    //总份数=总时间/每份时间
    var count=parseInt(stopTime/30);

    var n=0;//计数器
    clearInterval( obj.timer);
    obj.timer=setInterval(function(){
        n++;

        var a=1-n/count;//减速运动

        //步进长度=起点+n步步进的距离(每份的距离(总距离/总份数)*n)
        var step_dis=start+dis*(1-a*a*a);

        //判断透明度
        if(moveMode=='opacity'){
            obj.style.opacity=step_dis/100;
            obj.style.filter='alpha(opacity:)'+step_dis+')';
        }
        else{
            obj.style[moveMode]=step_dis+'px';
        }

        if(n==count){
            clearInterval(obj.timer);
        };
    },30);
};