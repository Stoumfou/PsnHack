var code = [0,0,0,0];
var input = [0,0,0,0];
var result = [0,0,0,0];
var codeCheck = [0,0,0,0];

for(var i=0; i<4; i++){
	code[i] = Math.floor(Math.random() * 10);
}


function play(){
	var display = 'X X X X';
    var tried = '- - - -';
	
	$('#res').text(display);
    $('#tried').text(tried);
		
	$('#try').on('click', function(){
		codeCheck = [0,0,0,0];
		display = '';
        
        
		for(var i=0; i<4; i++){
			var selector = '#select'+i;
			
			input[i] = $(selector).val();
				
			result[i] = checkCode(input[i],i);
        }
        
		for(var i=0; i<4; i++){
			var selector = '#select'+i;
			
			input[i] = $(selector).val();
				
			result[i] = checkCode(input[i],i);
				
			switch(result[i]){
				case -1: 	display +='M ';
							break;
					
				case 1:		display += 'O ';
							break;
								
				case 0:		display += 'X ';
				default:;
			}
		}
					
		$('#res').text(display);		
			
		if(win())
		{
			alert("VICTOIRE !\nLe code est: "+code[0]+code[1]+code[2]+code[3]);
			window.location = '../Demineur/demineur.html';
		}
			
		
    $('#tried').text(""+input[0]+" "+input[1]+" "+input[2]+" "+input[3]);
        
    $('#res').removeAttr('id');
    $('#tried').removeAttr('id');    
    $('#game').append('<div class="col-lg-3" id="tried"></div><div class="col-lg-3" id="res"></div><div class="col-lg-6">&nbsp;</div>');
	});		
}

function checkCode(value, pos){
	var res = 0;
	
	if(value == code[pos]){
		codeCheck[pos] = 1;
		res = 1;
	}
	else{
		
		for(var i=0; i <4; i++){
			if ((value == code[i]) && (codeCheck[i] == 0)) res = -1;
		}	
	}
    //console.log(''+codeCheck[0]+codeCheck[1]+codeCheck[2]+codeCheck[3]);
	return res;
}

function win(){
	res = true;
	
	for(var i=0; i<4; i++)if(result[i] != 1)res = false;
	
	return res;
}

$(document).ready(function(){
    var select = '';
    for(var i=0; i<4; i++){
        select += '<div class="form-group col-xs-2"><select id="select'+i+'" class="form-control"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></div>';
    }
    
	$('#game').append('<div class="col-lg-3" id="tried"></div><div class="col-lg-3" id="res"></div><div class="col-lg-6">'+select+'<button id="try" class="btn btn-danger">Try</button></div>');
    
	play();	
});
