YUI.use('event', function(Y){
  Y.one("redbox").on("flick", function(e){
    alert(e.flick.velocity);
  }, {standAlone:true});
});
