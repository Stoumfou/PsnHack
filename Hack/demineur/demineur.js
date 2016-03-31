
jeu=new Array(64);
de=new Array(64);

function depart(){
	dt1=new Date();
	hr1=dt1.getHours();
	min1=dt1.getMinutes();
	sec1=dt1.getSeconds();
	for (x=0;x<64;x++){
		jeu[x]=0;
		de[x]=0;
	}
	for (x=1;x<9;x++){
		for (y=1;y<9;y++){
			document.images[x+'et'+y].src='rien.jpg';
		}
	}
	i=0;
	while(i<10){
		x=rnd(8)+1;
		y=rnd(8)+1;
		if (jeu[x+y*8-9]==0){
			jeu[x+y*8-9]=9;
			i++;
		}
	}
	for (x=1;x<9;x++){
		for (y=1;y<9;y++){
			i=0;
			if (x>1){
				if (jeu[(x-1)+(y-1)*8-9]==9){
					i++;
				}
				if (jeu[(x-1)+(y)*8-9]==9){
					i++;
				}
				if (jeu[(x-1)+(y+1)*8-9]==9){
					i++;
				}
			}
			if (jeu[(x)+(y-1)*8-9]==9){
				i++;
			}
			if (jeu[(x)+(y+1)*8-9]==9){
				i++;
			}
			if (x<8){
				if (jeu[(x+1)+(y-1)*8-9]==9){
					i++;
				}
				if (jeu[(x+1)+(y)*8-9]==9){
					i++;
				}
				if (jeu[(x+1)+(y+1)*8-9]==9){
					i++;
				}
			}
			if (jeu[x+y*8-9]==9){
				i=9;
			}
			jeu[x+y*8-9]=i;
		}
	}
	heure();
}
function joueurdemin(x,y){
	var x2, y2, a, b;
	if (de[x+y*8-9]==0){
		document.images[x+'et'+y].src=jeu[x+y*8-9]+'.jpg';
		de[x+y*8-9]=1;
		if (jeu[x+y*8-9]==9){
			for (x=1;x<9;x++){
				for (y=1;y<9;y++){
					document.images[x+'et'+y].src=jeu[x+y*8-9]+'.jpg';
				}
			}
            $('#myModal').modal('show'); 
			depart();
            
		}else if (jeu[x+y*8-9]==0){
			for (x2 = x - 1; x2 < x + 2; x2++){
				for (y2 = y - 1; y2 < y + 2 ; y2++){
					if (x2 >0 && x2 < 9 && y2 >0 && y2 < 9 && de[x2+y2*8-9]==0){
						joueurdemin(x2,y2);
					}
				}
			}
		}
	}
	a=0;
	b=0;
	for (x2 = 1; x2 < 9; x2++){
		for (y2 = 1; y2 < 9; y2++){
			if (de[x2+y2*8-9]==0){
				a++;
			}
		}
	}
	if (a==10){
		alert("gagné !!!");
		depart();
	}
}
	function heure(){
		dt2=new Date();
		hr2=dt2.getHours();
		min2=dt2.getMinutes();
		sec2=dt2.getSeconds();
		document.form.score.value=(hr2-hr1)*3600+(min2-min1)*60+(sec2-sec1);
		setTimeout("heure();", 500);
	}
function rnd(n){
	var temp = Math.random();
	if (temp==1) temp=0.9;
	return Math.floor(temp * n);
}