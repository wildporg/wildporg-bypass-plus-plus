// ==UserScript==
// @name         Bypass++ Yandex Beta
// @namespace    https://github.com/wildporg/wildporg-bypass-plus-plus/blob/main/main.js
// @version      0.3
// @description  This script lets you bypass most website blockers... With yandex.
// @author       wildporg (https://github.com/wildporg)
// @match        *://*/*
// @icon         http://github.com/favicon.ico
// @grant        GM_setValue
// @grant        GM_getValue
// @noframes     true
// ==/UserScript==

(function() {
    var newUrl = "https://translated.turbopages.org/proxy_u/ru-en.en.5cc5cb34-6389e872-e95eb395-74722d776562/";
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
            if (window.location.toString().includes("https://www.google.") == false && window.location.toString().includes("https://google.") == false) {
                if (confirm("Switch to Yandex hosted page?")) {
                    window.location.replace(newUrl+window.location.toString().replace(":/",""));
                };
            } else {
                var input = prompt("Where to?");
                if (confirm("Switch to Yandex hosted page?")) {
                    window.location.replace(newUrl+input.replace(":/",""));
                };
            };
        };
    } else {
        if (GM_getValue("googleWindow")) {} else {
            if (confirm('Do you want to have a "To Google" button at all times?')) {
                GM_setValue("googleWindow", true);
                window.alert("Preferences saved!");
            } else {
                GM_setValue("googleWindow", false);
                window.alert("Preferences saved!");
            };
        };
        if (GM_getValue("googleWindow") == true) {
            var googleDiv = document.createElement("div");
            googleDiv.style.cssText = "position: fixed; z-index: 10000; top: 0px; left: 0px; margin: 1vw; background: #18B; border-radius: 1em/1em;";
            var googleButton = document.createElement("button");
            googleButton.innerHTML = "Back to google (without a trace!)"
            googleButton.style.cssText = "color: #FFFFFF; font-size: 1em; border: none; background: #00000000; padding: 0.75em; padding-right: 0px;";
            googleButton.addEventListener("click", toGoogle);
            var closeButton = document.createElement("button");
            closeButton.innerHTML = "×";
            closeButton.style.cssText = "color: #FFFFFF; font-size: 1em; border: none; background: #00000000; padding: 0.75em;";
            closeButton.addEventListener("click", closeGoogleDiv);
            googleDiv.append(closeButton)
            googleDiv.prepend(googleButton)
            document.body.prepend(googleDiv);
            function toGoogle() {window.location.replace("https://www.google.com")};
            function closeGoogleDiv() {googleDiv.remove();};
        };
    };
})();
