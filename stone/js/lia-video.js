
if (!window['YT']) {var YT = {loading: 0,loaded: 0};}if (!window['YTConfig']) {var YTConfig = {'host': 'http://www.youtube.com'};}if (!YT.loading) {YT.loading = 1;(function(){var l = [];YT.ready = function(f) {if (YT.loaded) {f();} else {l.push(f);}};window.onYTReady = function() {YT.loaded = 1;for (var i = 0; i < l.length; i++) {try {l[i]();} catch (e) {}}};YT.setConfig = function(c) {for (var k in c) {if (c.hasOwnProperty(k)) {YTConfig[k] = c[k];}}};var a = document.createElement('script');a.type = 'text/javascript';a.id = 'www-widgetapi-script';a.src = 'https://s.ytimg.com/yts/jsbin/www-widgetapi-vflPSGdpW/www-widgetapi.js';a.async = true;var b = document.getElementsByTagName('script')[0];b.parentNode.insertBefore(a, b);})();}



var player;
$("#video-thumb-lia").click(function(){
if($("#player-lia").is("div")) {
  $(this).hide();
  player = new YT.Player('player-lia', {
    height: '550',
    width: '100%',
    playerVars: { 'controls': 0,'autohide':1},
    videoId: 'KXnL69dAp74',
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
      $("#player-lia").remove();
      $("#playerContainer").append('<div id ="player-lia" width="100%" align="left" height="550""></div>');
      $("#video-thumb-lia").show();
    }
  }
});
