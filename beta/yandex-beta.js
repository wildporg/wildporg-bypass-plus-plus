// ==UserScript==
// @name         Bypass++ Yandex Beta
// @namespace    https://github.com/wildporg/wildporg-bypass-plus-plus/blob/main/main.js
// @version      0.1
// @description  This script lets you bypass most website blockers... With yandex.
// @author       wildporg (https://github.com/wildporg)
// @match        *://*/*
// @icon         http://github.com/favicon.ico
// @grant        none
// @noframes     true
// ==/UserScript==

(function() {
    if (window.location.origin != "https://translated.turbopages.org") {
        var div = document.createElement("div");
        div.style.cssText = "position: fixed; margin-left: 49vw; background: #00000000; top: 0px; left: 0px; z-index: 10000; text-align: center;";
        div.id = "wpDiv";
        var button = document.createElement("button");
        button.style.cssText = "font-family: vedana, calibri; color: #EEE; font-size: 1vw; background: #AA000044; border-color: #00000000; aspect-ratio: 1/1; width: 2vw; border-radius: 5em/5em;";
        button.innerHTML = "↓";
        button.addEventListener("click", yandexPage)
        div.appendChild(button)
        document.body.appendChild(div);
        function yandexPage() {
            if (confirm("Switch to Yandex hosted page?")) {
                var newUrl = "https://translated.turbopages.org/proxy_u/ru-en.en.5cc5cb34-6389e872-e95eb395-74722d776562/"
                window.location.replace(newUrl+window.location.toString().replace(":/",""))
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
