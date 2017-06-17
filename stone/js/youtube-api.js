
if (!window['YT']) {var YT = {loading: 0,loaded: 0};}if (!window['YTConfig']) {var YTConfig = {'host': 'http://www.youtube.com'};}if (!YT.loading) {YT.loading = 1;(function(){var l = [];YT.ready = function(f) {if (YT.loaded) {f();} else {l.push(f);}};window.onYTReady = function() {YT.loaded = 1;for (var i = 0; i < l.length; i++) {try {l[i]();} catch (e) {}}};YT.setConfig = function(c) {for (var k in c) {if (c.hasOwnProperty(k)) {YTConfig[k] = c[k];}}};var a = document.createElement('script');a.type = 'text/javascript';a.id = 'www-widgetapi-script';a.src = 'https://s.ytimg.com/yts/jsbin/www-widgetapi-vflPSGdpW/www-widgetapi.js';a.async = true;var b = document.getElementsByTagName('script')[0];b.parentNode.insertBefore(a, b);})();}



var player;
$("#video-thumb").click(function(){
if($("#player").is("div")) {
  $(this).hide();
  player = new YT.Player('player', {
    height: '600',
    width: '100%',
    playerVars: { 'controls': 1,'autohide':1},
    videoId: 'aeTXfQvlEVs',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });

}
  else {
    player.autohide=1;
    player.playVideo();
  }
  // when video ends
  function onPlayerReady(event) {
    event.target.playVideo();
  }

  function onPlayerStateChange(event) {
    if(event.data === 0) {
      $("#player").remove();
      $("#playerContainer").append('<div id ="player" width="100%" align="left" height="600""></div>');
      $("#video-thumb").show();
    }
  }
});
