function cell() {
	
	var box = $("<div class='props' id='cell'></div>").text("");
	$("body").append(box);

}

function grid(){
	
	$('#button').click(function( event ) {
		
		var col         = $('#col').val();
		var row         = $('#row').val();
		var size        = $('#size').val();
		var space       = $('#space').val();
		var totcells    = col*row;
		var rowsize     = parseInt(size) + parseInt(space);
		var containSize = col * rowsize;
		var containSizeH = row * rowsize;
		$('#contain').css('width', containSize);//width
		$('#contain').css('height', containSizeH);//height
		for (var i = 0; i < totcells; i++) {
			var id = "cell"+i;	
			var box = $("<div class='props' id='"+id+"'></div>");
			$('#contain').append(box);	
			var randColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});//makes random hex code
			$('#'+id).css('background-color', randColor);//alters css property for background color
			$('.props').css('width', size);
			$('.props').css('height', size);
			$('.props').css('margin-right', space + "px");
			$('.props').css('margin-bottom', space + "px");
			
		}
	});
}

function resizableGrid(){
	var i = 0;
   $('#dragbar').mousedown(function(e){
       
        e.preventDefault();
        
        $(document).mousemove(function(e){
			$('#position').html('Size(widthx height):   ' + (parseInt(e.pageX/100)) + '  x  ' + parseInt((e.pageY/100)));
			$('#resize').css("width",e.pageX+2);
			$('#resize').css("height",e.pageY+2);
			var col 		 = parseInt(e.pageX/110);
			var row 		 = parseInt(e.pageY/110);
			var totcells     = col*row;

		  	for (var j = 0; i < totcells; i++) {
				
				var id = "cell"+i;	
				var box = $("<div class='props' id='"+id+"'></div>");
				$('#resize').append(box);	
				var randColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});//makes random hex code
				$('#'+id).css('background-color', randColor);//alters css property for background color
		  	}   
       })
       console.log("leaving mouseDown");
    });
   $(document).mouseup(function(e){
      
       $(document).unbind('mousemove');
       });
}
