// JavaScript Document
function fn_nav(otab,obot){
	for(i=0;i<otab.length;i++){
		otab[i].arr=i;
		otab[i].onmouseover=function sun(){
			for(j=0;j<otab.length;j++){
				otab[j].className='';
				obot[j].style.display='none';
			}
			otab[this.arr].className='ac';
			obot[this.arr].style.display='block';
			
		}
		//setInterval(sun,500)
	}
}