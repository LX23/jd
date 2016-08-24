// JavaScript Document
//找到tab标签
function run(id,auto){//id为自动播放，auto为控制自动播放开关
var oX=document.getElementById(id);
var tit=oX.getElementsByClassName("tit")[0];
var ol=tit.getElementsByTagName('a');
//找到对应的div

var oDiv=oX.getElementsByClassName('tuijian');
var num = 0;//自动播放的卡片编号
var timer='';
	for(var i=0;i<ol.length;i++){
		ol[i].arr=i;
		ol[i].onclick=function sun(){
			for(var j=0;j<ol.length;j++){
				ol[j].className='';//将全部标签去掉class
				oDiv[j].style.display='none';//把所有div隐藏
			};
			ol[this.arr].className='ac';
			oDiv[this.arr].style.display='block';
			num=this.arr;
		};
	};
if(auto){
	//自动轮播
	function autoRun(){
		timer=setInterval(function (){
			function sum(num){
				for(var i=0;i<ol.length;i++){
					ol[i].className='';
					oDiv[i].style.display='none';
				};
				//指定卡片的显示
				ol[num].className='ac';
				oDiv[num].style.display='block';
			};
			sum(num);
			num++;
			if(num==3) num=0;
		},1000);
	}
	autoRun();
	//当鼠标进入大盒子时停止播放
	oX.onmouseover=function (){
		clearInterval(timer);
	};
	//出来时继续自动播放
	oX.onmouseout=function (){
		autoRun();
	};
	};
};