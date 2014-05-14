function generateGraph( canvas, X, Y, width, height, data )
{
	var context = canvas.getContext( "2d" );
	context.rect( X, Y, width, height );
	context.stroke( );
	
	var barWidth = width / data.length;
	var maxValue = 0;
	for( var i = 0; i < data.length; i++ )
	{
		maxValue = ( data[ i ] > maxValue ? data[ i ] : maxValue );
	}
	var dataScale = height / maxValue;
	
	for( var i = 0; i < data.length; i++ )
	{
		context.rect( i * barWidth, height - ( data[ i ] * dataScale ), barWidth, data[ i ] * dataScale );
		context.stroke( );
		
		context.fillText( data[ i ], i * barWidth + ( barWidth / 3 ), height - 3 );
		context.stroke( );
	}
}