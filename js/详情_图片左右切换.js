// JavaScript Document

function hxsd_lunbo(marin_left,numb,oul,li){
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
			numb[i].onmouseover=function(){
				for(var j=0;j<numb.length;j++){
				   numb[j].className='';
				};
				this.className='ac';
	
				show_num=this.index;
	
				hxsd_move(oul,'left',-li_w*show_num,400);//调用函数
			};
		};	
}




