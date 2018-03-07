$(document).ready(function () {

  var scriptSrc = 'js/script.js';
  if (/Mobi/.test(navigator.userAgent)) {
      // mobile!
      scriptSrc = 'js/script-sm.js';
  }
  var script = document.createElement('script');
  script.src = scriptSrc;
  var body = document.getElementsByTagName('body')[0];
  body.appendChild(script);


});
