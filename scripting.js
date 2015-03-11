$(document).ready(function(){
	displayGrid(16);
	$('.gridCell').mouseenter(function(){
		$(this).css("background-color", "black");
	});
	$('#newGridButton').click(function(){
		$('.gridCell').remove();
		var userNum = prompt('Type an integer between 1 and 64');
		displayGrid(userNum);
		$('.gridCell').mouseenter(function(){
		$(this).css("background-color", "black");
	});
	});

});

function displayGrid(n){
	
	var cellSize = 960/n;

	for(var i=0; i<n; i++)
	{
		for(var j=0; j<n; j++)
		{
			$('#container').append( $('<div>&nbsp</div>').addClass("gridCell"));
		}
	}
	$('.gridCell').height(cellSize);
	$('.gridCell').width(cellSize);
	$('#container').height(cellSize*n);
	console.log('height of containter is ' + $('#container').height() );
}