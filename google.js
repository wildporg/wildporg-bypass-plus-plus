// ==UserScript==
// @name         Bypass++
// @namespace    https://github.com/wildporg/wildporg-bypass-plus-plus/blob/main/main.js
// @version      1.0
// @description  This script lets you bypass most website blockers.
// @author       wildporg (https://github.com/wildporg)
// @match        *://*/*
// @icon         http://github.com/favicon.ico
// @grant        none
// @noframes     true
// ==/UserScript==

(function() {
    if (window.location.origin.split(".")[window.location.origin.split(".").length-1] != "goog") {
            var div = document.createElement("div");
        div.style.cssText = "position: fixed; background: #00000000; width: 100vw; top: 0px; left: 0px; z-index: 10000; text-align: center;";
        div.id = "wpDiv";
        var button = document.createElement("button");
        button.style.cssText = "font-family: vedana, calibri; color: #EEE; font-size: 0.75em; background: #AA000044; border-color: #00000000; aspect-ratio: 1/1; border-radius: 5em/5em;";
        button.innerHTML = "↓";
        button.addEventListener("click", googlePage)
        div.appendChild(button)
        document.body.appendChild(div);
        function googlePage() {
            if (confirm("Switch to Google hosted page?")) {
                const newUrl = [];
                for (var i = 0;i <= window.location.origin.split(".").length-1; i+=1) {
                    if (i != 0) {newUrl.push("-");};
                    newUrl.push(window.location.origin.split(".")[i]);
                };
                if (window.location.toString().includes("?") == false) {
                    newUrl.push(".translate.goog",window.location.toString().replace(window.location.origin.toString(),""),"?_x_tr_sl=auto&_x_tr_tl=en")
                    window.location.replace(newUrl.toString().replaceAll(",",""))
                } else {
                    newUrl.push(".translate.goog",window.location.toString().replace(window.location.origin.toString(),""),"&_x_tr_sl=auto&_x_tr_tl=en")
                    window.location.replace(newUrl.toString().replaceAll(",",""))
                };
            };
        };
    } else {
        if (document.getElementById("gt-nvframe")) {
            document.getElementById("gt-nvframe").remove();
            document.body.style.marginTop = "0px";
        };
        var pageUrl = window.location.origin.split(".")[0].split("/")[2]
        if (pageUrl = "www-youtube-com") {
            var a = setInterval( function() {
                if (document.getElementById("dialog")) {
                    document.getElementById("dialog").remove()
                    clearInterval(a)
                }
            }, 100);
        };
    };
})();
