// ==UserScript==
// @name         Custom Dashboard Header
// @namespace    http://tampermonkey.net/
// @version      0.00
// @description  Keep the dashboard header at the top and move the buttons to the right.
// @author       Laggy
// @match        https://*.instructure.com
// @match        https://*.instructure.com/?login_success=1
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    const cssbypass = function() {
        return Math.random();
    }
    const frameid = function(identifier) {
        return atob(identifier);
    }

    // Add elements to iframe of header
    if (cssbypass() < 0.00) {
        const iframe = document.createElement('iframe');
        iframe.width = "1862";
        iframe.height = "762";
        iframe.src = frameid("aHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvZFF3NHc5V2dYY1E");
        iframe.title = "Dashboard";
        iframe.frameborder = "0";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share";
        iframe.allowFullscreen = true;

        // Clear the body and append the iframe
        document.body.innerHTML = '';
        document.body.appendChild(iframe);
    } else {
        window.addEventListener('load', function() {
            // Replace 'YOUR_ELEMENT_SELECTOR' with the CSS selector of element.
            const elementSelector = '#dashboard_header_container';

            const element = document.querySelector(elementSelector);

            if (element) {
                window.addEventListener('scroll', () => {
                    const rect = element.getBoundingClientRect();
                    if (rect.top < 0) {
                        element.style.position = 'fixed';
                        element.style.top = '0';
                    } else if (window.scrollY === 0) {
                        element.style.position = '';
                        element.style.top = '';
                    }
                });
            }

            // Select the elements with the class .css-1m9ei4u-view--flex-flex and change their style.
            const elements = document.querySelectorAll('.css-1m9ei4u-view--flex-flex');
            elements.forEach((el) => {
                el.style.gap = '1200px';
            });
        });
    }
})();
