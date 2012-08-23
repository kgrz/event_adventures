YUI().use('event', function(Y){
  var button = Y.one("#wrap");
  button.on("flick", function(e){
    
    alert(e.flick.velocity);
  
  });
});
