var connection = new Postmonger.Session();  
  
// Startup Sequence  
connection.trigger('ready');  
  
connection.on('initActivity', function( data ) {  
  document.getElementById( 'configuration' ).value = JSON.stringify( data, null, 2 );  
});  
  
// Save Sequence  
connection.on('clickedNext', function() {  
  var configuration = JSON.parse( document.getElementById( 'configuration' ).value );  
  
  // Get push message and subject from the form  
  var pushMessage = document.getElementById('pushMessage').value;  
  var subject = document.getElementById('subject').value;  
  
  // Update configuration with push message and subject  
  configuration.arguments.execute.inArguments[1].PushMessage = pushMessage;  
  configuration.arguments.execute.inArguments[2].Subject = subject;  
  
  connection.trigger('updateActivity', configuration);  
});  
