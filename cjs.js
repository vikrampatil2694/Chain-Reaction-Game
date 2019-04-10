let m,n,d,p,t,n1,d1,p1,t1,myVar,rc,gc,flag1=1;
let flag=1;

function get(vicky){
	 rc=0;
		 gc=0;
		 t1=document.getElementById("t1");
		 let res=document.getElementById("res");
if(vicky.children[0].style.color!="green" && flag1==1){
		if(vicky.children[0].style.color!="green" && flag1==1){
		
	if(flag==1){
	
t1.style.color="green";
  t1.children[0].innerHTML="Green Turn";
		
   if((res.children[0].innerHTML!="Red Win") && (res.children[0].innerHTML!="Green Win")){
   	get1(vicky);
   }
		
		
		flag1=2
		flag++;
		}	
	}
else  {
		if(flag1==1){
			flag=1;
		}
		
		
	}
	}
	
else {
	if((vicky.children[0].style.color!="red" && flag1==2)){
		if(flag==2){
	
			t1.style.color="red";
  t1.children[0].innerHTML="Red Turn"
 
		if((res.children[0].innerHTML!="Red Win") && (res.children[0].innerHTML!="Green Win")){
   	get1(vicky);
   }
		
		flag1=1;
		flag--;
	   }
	   
	}
else{
	if(flag1==2){
		flag=2;
	}
}

		
	
	}
	for(i=1;i<37;i++){
	let h=document.getElementById(i);
	if(h.children[0].style.color=="red"){
		rc=rc+1;
		
	}
	else if(h.children[0].style.color=="green"){
		gc=gc+1;
		
		}
	}
	
	let reset=document.getElementById("reset");
	if(rc>1 && gc==0){
		res.style.display="flex";
		res.style.color="red";
		reset.style.display="flex";
		res.children[0].innerHTML="Red Win";
	}
	else if(gc>1 && rc==0){
		res.style.display="flex";
		res.style.color="green";
		reset.style.display="flex";
		res.children[0].innerHTML="Green Win";
	}
	if(res.style.display=="flex"){
		t2=document.getElementById("t1");
		t2.children[0].innerHTML="GAME OVER"
	}
}
	
	
	


function get1(vicky){
	
		

	m=parseInt(vicky.id)
	 n=m+1;
	 d=m+6;
	p=m-1;
	t=m-6;
			chain(vicky);
	
}
function chain(vicky){
	
  var a=vicky.children[0];
if(a.innerHTML==""){
	
    if(flag==1){
    	a.style.color="red";
    	a.innerHTML="0";
    
    }
  if(flag==2){
    	a.style.color="green";
    	a.innerHTML="0";
    }
		
	}
else if(a.innerHTML=="0"){
	
		n1=n;
		d1=d;
		p1=p;
		t1=t;
	let x=document.getElementById(n1);
	let y=document.getElementById(d1);
	let z=document.getElementById(p1);
	let w=document.getElementById(t1);
	  if(m==1){
	  	a.innerHTML="";
	  	a.removeAttribute("style");
	  //	myVar=setInterval(get1(x),300)
	   get1(x)
	 get1(y);
	   
	   
	   
    	}
	  else if(m==6){
	  	a.innerHTML="";
	  	a.removeAttribute("style");
	   get1(z);
	   get1(y);
   	}
   	else if(m==31){
	  	a.innerHTML="";
	 a.removeAttribute("style");
	   get1(w);
	   get1(x);
   	}
   	 else if(m==36){
	  	a.innerHTML="";
	  	a.removeAttribute("style");

	   get1(w);
	   get1(z);
   	}
	  else{
		if(flag==1){
    	a.style.color="red";
    	a.innerHTML="00";
    }
    else if(flag==2){
    	a.style.color="green";
    	a.innerHTML="00";
    }
	  }
		
	}
else if(a.innerHTML=="00"){
		n1=n;
		d1=d;
		p1=p;
		t1=t;
	   let x1=document.getElementById(n1);
	   let y1=document.getElementById(d1);
	   let z1=document.getElementById(p1);
	   let w1=document.getElementById(t1);
	    if(m==2||m==3||m==4||m==5){
	    	a.innerHTML="";
	    	a.removeAttribute("style");
	     get1(x1);
	     get1(y1);
	     get1(z1);
     	}
     	else if(m==7||m==13||m==19||m==25){
     		a.innerHTML="";
     		a.removeAttribute("style");
	     get1(x1);
	     get1(y1);
	     get1(w1);
     	}
     	else if(m==32||m==33||m==34||m==35){
     		a.innerHTML="";
     		a.removeAttribute("style");
	     get1(x1);
	     get1(z1);
	     get1(w1);
     	}
     	else if(m==12||m==18||m==24||m==30){
     		a.innerHTML="";
     		a.removeAttribute("style");
	     get1(y1);
	     get1(z1);
	     get1(w1);
     	}
     	else{
	  	if(flag==1){
    	a.style.color="red";
    	a.innerHTML="000";
    }
    else if(flag==2){
    	a.style.color="green";
    	a.innerHTML="000";
    }
	     }
   }
else if(a.innerHTML=="000"){
		
		a.removeAttribute("style");
		n1=n;
		d1=d;
		p1=p;
		t1=t;
	let x2=document.getElementById(n1);
	let y2=document.getElementById(d1);	
	let z2=document.getElementById(p1);
	let w2=document.getElementById(t1);
	  a.innerHTML="";
	   get1(x2);
	 
	   get1(y2);
	  
	   get1(z2);
	 
	   
	  get1(w2);
	 
	  
	}
}
    
    
