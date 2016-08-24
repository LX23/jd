// JavaScript Document

function hxsd_lunbo(main1,oRi,oLe,numb,oul,li){
	var show_num=0;//点击的序号
	
	//li的宽度------------------------------------------
		var li_w=getStyle(li[0],'width');
	
		console.log(li_w);//检测
	
	//ul的宽度------------------------------------------
		oul.style.width=li_w.length*li_w+'px';
	
	//点击数字按钮切换图片--------------------------------
		for(var i=0;i<numb.length;i++){
			numb[i].index=i;//发牌照
	
	//点击数字按钮---------------------------------------
			numb[i].onclick=function(){
				for(var j=0;j<numb.length;j++){
				   numb[j].className='';
				};
				this.className='ac';
	
				show_num=this.index;
	
				hxsd_move(oul,'left',-li_w*show_num,400);//调用函数
			};
	
	//当按下对应的数字时，切换到对应的选项卡
			document.onkeydown = function (ev) {
				var oEv = ev || window.event;
				if (oEv.keyCode >= 97 && oEv.keyCode <= 102) {
					for (var k = 0; k < numb.length; k++) {
						numb[k].className = '';
					}
					numb[oEv.keyCode - 97].className = 'ac';
					show_num =oEv.keyCode - 97;//发牌号
					hxsd_move(oul, 'left', -li_w*show_num, 500);
				};
	
	
	//当按左右键时，左右切换图
				//按下左键，往左移动
				if (oEv.keyCode == 37) {
					show_num--;
					for (var k = 0; k < numb.length; k++) {
						numb[k].className = '';
					};
					if(show_num<0){
						show_num=0;
					};
					numb[show_num].className = 'ac';
					hxsd_move(oul, 'left', -li_w*show_num, 500);
				};
	
				//按下右键，往右移动
				if (oEv.keyCode == 39) {
					show_num++;
					for (var k = 0; k < numb.length; k++) {
						numb[k].className = '';
					};
					if(show_num>=li.length-1){
						show_num=li.length-1;
					};
					numb[show_num].className = 'ac';
					hxsd_move(oul, 'left', -li_w*show_num, 500);
				};
	
			};
	
		};
	
	//点击左边的箭头按钮
		oLe.onclick=function(){
			show_num++;
			for(var j=0;j<numb.length;j++){
				numb[j].className='';
			};
			if(show_num>=li.length-1){//当他大于li的长度时候
				show_num=li.length-1;
			};
			numb[show_num].className='ac';
			hxsd_move(oul,'left',-li_w*show_num,400);
		};
	
	//点击右边的箭头按钮
		oRi.onclick=function(){
			show_num--;
			for(var j=0;j<numb.length;j++){
				numb[j].className='';
			};
			if(show_num<=0){
				show_num=0;
			};
			numb[show_num].className='ac';
			hxsd_move(oul,'left',-li_w*show_num,400);
		};
		main1.onmouseover=function(){
			oRi.style.display="block";
			oLe.style.display="block";
		};
		main1.onmouseout=function(){
			oRi.style.display="none";
			oLe.style.display="none";
		}
		
}