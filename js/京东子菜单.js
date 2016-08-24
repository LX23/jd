// JavaScript Document

function fn1(oDiv,oli,osub,xxk){
//定义空对象
var timer1='';
var timer2='';
var timer3='';
	for(var i=0;i<oli.length;i++){
		//鼠标滑入左边的菜单
		oli[i].onmouseover=function (){
			clearTimeout(timer2)//清除定时器2
			clearTimeout(timer3)//清除定时器3
			this.style.backgroundColor="#28d5f4";
			timer1=setTimeout(function(){//定义延时200ms的定时器为对象1
				oli.className='';//最初ac样式为空
				osub.style.display="block";//显示右边的盒子
				xxk.style.display="none";
			},200)
			this.className='ac';//鼠标滑入li显示ac样式
		}
		//鼠标滑出左边的菜单
		oli[i].onmouseout=function (){
			this.className='';//鼠标滑出li去掉ac样式
			clearTimeout(timer1)//清除定时器1
			clearTimeout(timer3)//清除定时器2
			this.style.backgroundColor="";
			timer2=setTimeout(function(){//定义延时100ms的定时器为对象2
			osub.style.display="none";//右边的盒子隐藏
			xxk.style.display="block";
			},100)
		}
		
	}	
	//鼠标滑入右边的盒子
	osub.onmouseover=function (){
		clearTimeout(timer2)//清除定时器2
		clearTimeout(timer3)//清除定时器3
		
		timer3=setTimeout(function(){//定义延时100ms的定时器为对象3
		osub.style.display="block";//右边的盒子显示
		xxk.style.display="none";
		},100)
	}
	//鼠标滑出右边的盒子
	osub.onmouseout=function (){
		var wo=this;//将this代表函数转为wo这个变量
		
		timer3=setTimeout(function(){
		wo.style.display="none";//右边的盒子隐藏
		xxk.style.display="block";
		},100)
	}

}