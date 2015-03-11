$(document).ready(function(){
	displayGrid(16);
	$('.gridCell').mouseenter(function(){
		$(this).css("background-color", "black");
	});

});

function displayGrid(n){
	//var userNum = prompt('Type an integer between 1 and 64');
	var cellSize = 960/n;
	var myClass = "gridCell";
	for(var i=0; i<n; i++)
	{
		for(var j=0; j<n; j++)
		{
			$('#container').append( $('<div>&nbsp</div>').addClass("gridCell").css("width",cellSize));
			$('.gridCell').height(cellSize);
		}
	}
}