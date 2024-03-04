
function addZero(num){
	if(num<=9){
		return "0"+num;
	}else{
		return num;
	}
}

function getTime(){
	let hourEle=document.getElementById('hour'),
	    minEle=document.getElementById('minute'),
		secEle=document.getElementById('sec'),
		dateEle=document.getElementById('date'),
		monEle=document.getElementById('month'),
		yearEle=document.getElementById('year');
		
		let date=new Date();
		let hour=date.getHours();
		let min=date.getMinutes();
		let sec=date.getSeconds();
		let day=date.getDay();
		let dt=date.getDate();
		let mon=date.getMonth();
		let yr=date.getFullYear();
		
		hour=addZero(hour)		
		min=addZero(min);
		sec=addZero(sec);
		dt=addZero(dt);
		mon=addZero(mon);
		// mon=mon+1;
		// mon=add(mon);
		console.log(hour,min,sec);
		console.log(dt,mon,yr);
	    hourEle.innerHTML=hour;
		minEle.innerHTML=min;
		secEle.innerHTML=sec;
		dateEle.innerHTML=dt;
		monEle.innerHTML=mon;
		yearEle.innerHTML=yr;
		
		//get day
		let radioEle=document.getElementsByName('day');
		console.log(radioEle);
		for(let i=0;i<radioEle.length;i++){
			if(radioEle[i].value==day){
				console.log(radioEle[i]);
				radioEle[i].style.accentColor="red";
				radioEle[i].setAttribute('checked',true);
			}
		}
		
		//get time
		if(hour<12){
		let timeZone=document.getElementsByName('time');
		timeZone[0].style.accentColor="red";
		timeZone[0].setAttribute('checked',true);
		}
		else{
			timeZone=document.getElementsByName('time');
			timeZone[1].style.accentColor="red";
			timeZone[1].setAttribute('checked',true);
			
		}
		if(hour>12){
			hour=hour-12;
		}
		
}
getTime();
setInterval(getTime,1000);