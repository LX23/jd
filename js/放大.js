// JavaScript Document

//放大镜----------------------------------------------------------------
function zoom(id,zoomid){
	var oDiv=document.getElementById(id);
	var oMir=oDiv.getElementsByTagName('div')[0];
	var oBig=document.getElementById(zoomid);
	var oPic=oBig.getElementsByTagName('img')[0];
	oDiv.onmousemove=function(ev){
		var oEv=ev || window.event;
		var l=oEv.clientX-oDiv.offsetLeft-oMir.offsetWidth/2;
		var t=oEv.clientY-oDiv.offsetTop-oMir.offsetHeight/2;
		if(l<0)l=0;
		if(t<0)t=0;
		if(l>oDiv.offsetWidth-oMir.offsetWidth)l=oDiv.offsetWidth-oMir.offsetWidth;
		if(t>oDiv.offsetHeight-oMir.offsetHeight)t=oDiv.offsetHeight-oMir.offsetHeight;

		oMir.style.left=l+"px";
		oMir.style.top=t+"px";
		var rate_l=oMir.offsetLeft/(oDiv.offsetWidth-oMir.offsetWidth);
		var rate_t=oMir.offsetTop/(oDiv.offsetHeight-oMir.offsetHeight);
		var l_pic=oPic.offsetWidth-oBig.offsetWidth;
		var t_pic=oPic.offsetHeight-oBig.offsetHeight;
		oPic.style.left=-rate_l*l_pic+'px';
		oPic.style.top=-rate_t*t_pic+'px';
	};


	oDiv.onmouseover=function(){
		oMir.style.display=oBig.style.display="block";
	};

	oDiv.onmouseout=function(){
		oMir.style.display=oBig.style.display="none";
	};
}



