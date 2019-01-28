var endpoint = 'live'
var access_key = '582d231ada529b0aa4ee97477ef8d6ed';
var USDCNY,USDEUR,USDAUD,USDBTC,USDGBP,USDHKD,USDJYP,USDKPW,USDKRW,USDMOP,USDRUB,USDSGD,USDTWD,USDVND;

$.ajax({
    url: 'http://www.apilayer.net/api/' + endpoint + '?access_key=' + access_key,   
    dataType: 'jsonp',
    async: false,
    success: function(json) {
        USDCNY=json.quotes.USDCNY;
        USDEUR=json.quotes.USDEUR;
        USDAUD=json.quotes.USDAUD;
        USDBTC=json.quotes.USDBTC;
        USDGBP=json.quotes.USDGBP;
        USDHKD=json.quotes.USDHKD;
        USDJYP=json.quotes.USDJYP;
        USDKPW=json.quotes.USDKPW;
        USDKRW=json.quotes.USDKRW;
        USDMOP=json.quotes.USDMOP;
        USDRUB=json.quotes.USDRUB;
        USDSGD=json.quotes.USDSGD;
        USDTWD=json.quotes.USDTWD;
        USDVND=json.quotes.USDVND;
    }
});

window.onload=function(){

	var data=[
		{country: "USDCNY", value: USDCNY}, 
		{country: "USDEUR", value: USDEUR}, 
		{country: "USDAUD", value: USDAUD}, 
		{country: "USDBTC", value: USDBTC}, 
		{country: "USDGBP", value: USDGBP}, 
		{country: "USDHKD", value: USDHKD}, 
		{country: "USDJYP", value: USDJYP}, 
		{country: "USDKPW", value: USDKPW}, 
		{country: "USDKRW", value: USDKRW}, 
		{country: "USDMOP", value: USDMOP}, 
		{country: "USDRUB", value: USDRUB}, 
		{country: "USDSGD", value: USDSGD}, 
		{country: "USDTWD", value: USDTWD}, 
		{country: "USDVND", value: USDVND}
	];
	console.log(data[3].value);

	var buttons=document.getElementsByClassName("number");
	var monitors=document.getElementsByClassName("monitor");
	var monitorContent=document.getElementsByClassName("monitor-content");
	var operations=document.getElementsByClassName("operation");
	var countries=document.getElementsByClassName("select");
	var cName=document.getElementsByClassName("name");
	var cFlag=document.getElementsByClassName("flag");

	var isMonitor=new Array(false,false,false);
	var f="",ff=0;
	var temp="";
	var monitorNum=0;
	var currency1=USDCNY,currency2=USDEUR;

	for(let i=0;i<3;i++){

		monitors[i].onclick=function(){
			for(let i=0;i<3;i++){
				monitors[i].style.backgroundColor="#2A373E";
				monitors[i].style.fontSize="1.5rem";
				monitors[i].style.cssText+="margin: 0; color: #768084;";
				isMonitor[i]=false;
				countries[i].style.cssText+="display: none";
			}
			isMonitor[i]=true;
			monitors[i].style.backgroundColor="#3a4c55";
			monitors[i].style.fontSize="2rem";
			monitors[i].style.cssText+="margin: -8px; margin-right: 0; color: #ffffff;";
			countries[i].style.cssText+="display: none";
			monitorNum=i;
			f="";
		}

		var startPoint = null;
	    monitors[i].addEventListener("touchstart",function(e){
	        var e = e||window.event;
	        startPoint = e.touches[0];
	    });
	    monitors[i].addEventListener("touchend",function(e){
	        var e=e||window.event;
	        var endPoint = e.changedTouches[0];
	        var x = endPoint.clientX - startPoint.clientX;
	        var d = 10; // initialize slide distance
	        if(Math.abs(x)>d){
	            if(x<=0){
	                console.log("left");
	                monitors[i].style.cssText+="margin-left: 0;";
	                countries[i].style.cssText+="display: none";
	            } else if(x>0){
	            	console.log("right");
	            	monitors[i].style.cssText+="margin-left: 100px;";
	            	countries[i].style.cssText+="display: flex";
	            }
	        }
	    });

	}

	for(let i=0;i<3;i++){
		countries[i].onchange=function(){
			cName[i].innerHTML=countries[i].value;
			var index = countries[i].selectedIndex;
			var css=countries[i].options[index].dataset.css;
			cFlag[i].setAttribute("class",css);
			var currency=countries[i].options[index].dataset.currency;
			console.log(currency);
			var k=0;

			for(let j=0;j<data.length;j++){
				if(i==0){
					if(currency==data[j].country){
						currency1=data[j].value;
					}
				} else if(i==2){
					if(currency==data[j].country){
						currency2=data[j].value;
					}
				}	
			}
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
			m0=m0/currency1;
			m0=m0.toFixed(4);
			monitorContent[1].innerHTML=m0;
			m0=m0*currency2;
			m0=m0.toFixed(4);
			monitorContent[2].innerHTML=m0;
		} else if(monitorNum==1){
			var m1=monitorContent[monitorNum].innerHTML;
			var m11=m1;
			m1=m1*currency1;
			m1=m1.toFixed(4);
			monitorContent[0].innerHTML=m1;
			m11=m11*currency2;
			m11=m11.toFixed(4);
			monitorContent[2].innerHTML=m11;
		} else if(monitorNum==2){
			var m2=monitorContent[monitorNum].innerHTML;
			m2=m2/currency2;
			m2=m2.toFixed(4);
			monitorContent[1].innerHTML=m2;
			m2=m2*currency1;
			m2=m2.toFixed(4);
			monitorContent[0].innerHTML=m2;
		}
	}


}