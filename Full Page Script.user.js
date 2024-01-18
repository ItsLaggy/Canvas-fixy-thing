// ==UserScript==
// @name         Full Page Script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Make webpage take up the whole page
// @author       You
// @match        https://creanlutheran.instructure.com/*
// @exclude      https://creanlutheran.instructure.com/courses/*/discussion_topics/*
// @grant        none
// ==/UserScript==

window.onload = function() {
    'use strict';

    // Select the #right-side-wrapper div, #not_right_side div, #content-wrapper div, and #content div
    var rightSideWrapper = document.querySelector('#right-side-wrapper');
    var notRightSide = document.querySelector('#not_right_side');
    var contentWrapper = document.querySelector('#content-wrapper');
    var content = document.querySelector('#content');

    // Set its CSS properties for right side wrapper
    if (rightSideWrapper) {
        rightSideWrapper.style.position = 'auto';
        rightSideWrapper.style.right = '0';
        rightSideWrapper.style.top = '0';
        rightSideWrapper.style.height = '100vh';
        rightSideWrapper.style.overflow = 'auto';
    }

    // Set its CSS properties for #not_right_side, #content-wrapper, and #content to fill remaining space
    if (notRightSide) {
        notRightSide.style.width = '130%';
    }
    if (contentWrapper) {
        contentWrapper.style.width = '100%';
    }
    if (content) {
        content.style.width = 'auto';

    }
};
