// JavaScript Document

//放大镜----------------------------------------------------------------

function hxsd_fd(left_box,right_box,bigpic,ospan){
	left_box.onmouseover=function(){
				ospan.style.display='block';
				right_box.style.display='block';
			};
		left_box.onmouseout=function(){
			ospan.style.display='';
			right_box.style.display='';
		};
		left_box.onmousemove=function(ev){
			var oEv=ev||window.event;
			
			// l =鼠标X坐标-父盒子左边的距离-span盒子宽度的一半
			var l=oEv.clientX-left_box.offsetLeft-ospan.offsetWidth/2;
			var t=oEv.clientY-left_box.offsetTop-ospan.offsetHeight/2;
			
			if(l<0)l=0;
			if(t<0)t=0;
			
			if(l>left_box.offsetWidth-ospan.offsetWidth) l=left_box.offsetWidth-ospan.offsetWidth;
			if(t>left_box.offsetHeight-ospan.offsetHeight) t=left_box.offsetHeight-ospan.offsetHeight;
			
			var l_rate=l/(left_box.offsetWidth-ospan.offsetWidth);
			var t_rate=t/(left_box.offsetHeight-ospan.offsetHeight);
			//
			bigpic.style.left=-(bigpic.offsetWidth-right_box.offsetWidth)*l_rate+"px";
			bigpic.style.top=-(bigpic.offsetHeight-right_box.offsetHeight)*t_rate+"px";
			
			ospan.style.left=l+"px";
			ospan.style.top=t+"px";
	};
};


