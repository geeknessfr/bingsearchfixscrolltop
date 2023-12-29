// ==UserScript==
// @name         FIX for "Bing Search returns to the top" !
// @namespace    http://tampermonkey.net/
// @version      0.20
// @description  Stop doing weird things, Bing ;)
// @author       Geekness
// @match        http*://www.bing.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bing.com
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    // Disable the scroll to top functionality
    function disableScrollToTop() {
        window.scrollTo = function(x, y) {
            if (y !== 0 && !location.href.includes("showconv=1")) {
                window.scrollTo.originalFunc(x, y);
            }
        };
        window.scrollTo.originalFunc = window.scrollTo;
    }

    // Listen for 'focus' events on the window
    window.addEventListener('focus', disableScrollToTop);
})();
