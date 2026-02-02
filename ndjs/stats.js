/* =========================================
   1. Google Analytics (GA4) - Converted to JS
   ========================================= */
(function() {
    // Create the external script tag
    var gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-Q75MKXBWL7';
    document.head.appendChild(gaScript);

    // Initialize the DataLayer
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-Q75MKXBWL7');
})();

/* =========================================
   2. Statcounter
   ========================================= */
var sc_project = 13049188;
var sc_invisible = 1;
var sc_security = "28b53553";

var scScript = document.createElement('script');
scScript.async = true;
scScript.src = "https://www.statcounter.com/counter/counter.js";
document.head.appendChild(scScript);

/* =========================================
   3. Histats
   ========================================= */
// We wrap this in a check to ensure the document body exists
function injectHistats() {
    if (document.body) {
        var histatsImg = document.createElement('img');
        histatsImg.alt = "stats";
        histatsImg.src = "//sstatic1.histats.com/0.gif?4943554&101";
        // Optional: Hide the pixel so it doesn't break layout
        histatsImg.style.display = "none"; 
        document.body.appendChild(histatsImg);
    } else {
        // If body not ready, try again in 100ms
        setTimeout(injectHistats, 100);
    }
}
injectHistats();
