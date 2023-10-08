// ==UserScript==
// @name         Bypass++ Mobile
// @namespace    https://github.com/wildporg/wildporg-bypass-plus-plus/
// @version      1.1.4
// @description  This script lets you bypass most website blockers... With google.
// @author       wildporg (https://github.com/wildporg)
// @downloadURL  https://github.com/wildporg/wildporg-bypass-plus-plus/raw/beta/site-intergration/google.user.js
// @updateURL    https://github.com/wildporg/wildporg-bypass-plus-plus/raw/main/google.js
// @run-at document-end
// @match        *://*/*
// @icon         http://github.com/favicon.ico
// @grant        GM_setValue
// @grant        GM_getValue
// @noframes     true
// ==/UserScript==

(function() {
    if (window.location.href == "http://wildporg.com/products/bypass++/") {
        installed();
    };
    if (window.location.origin.split(".")[window.location.origin.split(".").length-1] != "goog") {
            var div = document.createElement("div");
        div.style.cssText = "position: fixed; background: #00000000; margin-left: 50%; top: 0px; left: 0px; z-index: 100000000000000; text-align: center; transform: translate(-50%, 0%);";
        div.id = "wpDiv";
        var button = document.createElement("button");
        button.style.cssText = "font-family: vedana, calibri; color: #EEE; font-size: 0.5cm; background: #AA000044; border-color: #00000000; aspect-ratio: 1/1; width: 1.5cm; border-radius: 100cm;";
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
        if (GM_getValue("googleWindow") == null) {
            if (confirm('Do you want to have a "To Google" button at all times?')) {
                GM_setValue("googleWindow", true);
                window.alert("Preferences saved!");
            } else {
                GM_setValue("googleWindow", false);
                window.alert("Preferences saved!");
            };
        } else if (GM_getValue("googleWindow") == true) {
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
