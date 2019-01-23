window.onload=function(){
	var buttons=document.getElementsByClassName("number");
	var monitors=document.getElementsByClassName("monitor");
	var operations=document.getElementsByClassName("operation");

	var isMonitor=new Array(false,false,false);
	var f="",ff=0;
	var temp="";
	var monitorNum=0;

	for(let i=0;i<3;i++){

		monitors[i].onclick=function(){
			for(let i=0;i<3;i++){
				monitors[i].style.backgroundColor="#2A373E";
				monitors[i].style.fontSize="1.5rem";
				monitors[i].style.cssText+="margin: 0;";
				isMonitor[i]=false;
			}
			isMonitor[i]=true;
			monitors[i].style.backgroundColor="#3a4c55";
			monitors[i].style.fontSize="2rem";
			monitors[i].style.cssText+="margin: -8px;";
			monitorNum=i;
			f="";
		}
	}

	for(let i=0;i<10;i++){
		buttons[i].onclick=function(){
			ff=buttons[i].innerHTML;
			f=f+ff;
			monitors[monitorNum].innerHTML=f;
		}
	}


	operations[0].onclick=function(){
		f=f+".";
		monitors[monitorNum].innerHTML=monitors[monitorNum].innerHTML+".";
	}

	operations[1].onclick=function(){
		f=f.substring(f.length-1,0);
		monitors[monitorNum].innerHTML=f;
	}

	operations[2].onclick=function(){
		f="";
		monitors[monitorNum].innerHTML=f;
	}

	operations[3].onclick=function(){

	}


}