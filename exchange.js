var endpoint = 'live'
var access_key = '582d231ada529b0aa4ee97477ef8d6ed';
var USDCNY=0,USDEUR=0;

$.ajax({
    url: 'http://www.apilayer.net/api/' + endpoint + '?access_key=' + access_key,   
    dataType: 'jsonp',
    async: false,
    success: function(json) {
        USDCNY=json.quotes.USDCNY;
        USDEUR=json.quotes.USDEUR;
    }
});

window.onload=function(){

	var buttons=document.getElementsByClassName("number");
	var monitors=document.getElementsByClassName("monitor");
	var monitorContent=document.getElementsByClassName("monitor-content");
	var operations=document.getElementsByClassName("operation");

	var isMonitor=new Array(false,false,false);
	var f="",ff=0;
	var temp="";
	var monitorNum=0;
	var CNY=0,USD=0,EUR=0;

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
			monitors[i].style.cssText+="margin: -8px; margin-right: 0;";
			monitorNum=i;
			f="";
		}
	}

	for(let i=0;i<10;i++){
		buttons[i].onclick=function(){
			ff=buttons[i].innerHTML;
			f=f+ff;
			monitorContent[monitorNum].innerHTML=f;
		}
	}


	operations[0].onclick=function(){
		f=f+".";
		monitorContent[monitorNum].innerHTML=monitorContent[monitorNum].innerHTML+".";
	}

	operations[1].onclick=function(){
		f=f.substring(f.length-1,0);
		monitorContent[monitorNum].innerHTML=f;
	}

	operations[2].onclick=function(){
		f="";
		for(let i=0;i<3;i++){
			monitorContent[i].innerHTML=f;
		}
	}

	operations[3].onclick=function(){
		if(monitorNum==0){
			var m0=monitorContent[monitorNum].innerHTML;
			monitorContent[1].innerHTML=m0/USDCNY;
			monitorContent[2].innerHTML=monitorContent[1].innerHTML*USDEUR;
		} else if(monitorNum==1){
			var m1=monitorContent[monitorNum].innerHTML;
			monitorContent[0].innerHTML=m1*USDCNY;
			monitorContent[2].innerHTML=m1*USDEUR;
		} else if(monitorNum==2){
			var m2=monitorContent[monitorNum].innerHTML;
			monitorContent[1].innerHTML=m2/USDEUR;
			monitorContent[0].innerHTML=monitorContent[1].innerHTML*USDCNY;
		}
	}


}