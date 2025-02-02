const Mobilekit = { version: 2.8, PWA: { enable: !0 }, Dark_Mode: { default: !1, night_mode: { enable: !1, start_time: 18, end_time: 6 }, auto_detect: { enable: !0 } }, RTL: { enable: !1 }, Test: { enable: !1, word: "testmode", alert: !0, alertMessage: "Test mode has been activated. Look at the developer console!" } };
var pageBody = document.querySelector("body"),
    appSidebar = document.getElementById("sidebarPanel"),
    loader = document.getElementById("loader");
if (Mobilekit.PWA.enable && "serviceWorker" in navigator && navigator.serviceWorker.register("/service-worker.js").then(e => console.log("service worker registered")).catch(e => console.log("service worker not registered - there is an error.", e)), setTimeout(() => { loader.setAttribute("style", "pointer-events: none; opacity: 0; transition: 0.2s ease-in-out;"), setTimeout(() => { loader.setAttribute("style", "display: none;") }, 1e3) }, 450), Mobilekit.RTL.enable) { var pageHTML = document.querySelector("html");
    pageHTML.dir = "rtl", document.querySelector("body").classList.add("rtl-mode"), null != appSidebar && (appSidebar.classList.remove("offcanvas-start"), appSidebar.classList.add("offcanvas-end")), document.querySelectorAll(".carousel-full, .carousel-single, .carousel-multiple, .carousel-small, .carousel-slider, .story-block").forEach(function(e) { e.setAttribute("data-splide", '{"direction":"rtl"}') }) }
var aWithHref = document.querySelectorAll('a[href*="#"]');
aWithHref.forEach(function(e) { e.addEventListener("click", function(e) { e.preventDefault() }) });
var goTopButton = document.querySelectorAll(".goTop");
goTopButton.forEach(function(e) { window.addEventListener("scroll", function() { window.scrollY > 100 ? e.classList.add("show") : e.classList.remove("show") }), e.addEventListener("click", function(e) { e.preventDefault(), window.scrollTo({ top: 0, behavior: "smooth" }) }) });
var goBackButton = document.querySelectorAll(".goBack");
goBackButton.forEach(function(e) { e.addEventListener("click", function() { window.history.go(-1) }) });
var adboxCloseButton = document.querySelectorAll(".adbox .closebutton");
adboxCloseButton.forEach(function(e) { e.addEventListener("click", function() { this.parentElement.classList.add("hide") }) });
var date = new Date,
    nowYear = date.getFullYear(),
    copyrightYear = document.querySelectorAll(".yearNow");
copyrightYear.forEach(function(e) { e.innerHTML = nowYear });
var storiesButton = document.querySelectorAll("[data-component='stories']");
storiesButton.forEach(function(e) { e.addEventListener("click", function() { var e = this.getAttribute("data-bs-target"),
            t = document.querySelector(e + " .modal-content"),
            o = this.getAttribute("data-time"); if (e = document.querySelector(e), o) { e.classList.add("with-story-bar"), t.appendChild(document.createElement("div")).className = "story-bar"; var n = document.querySelector("#" + e.id + " .story-bar");
            n.innerHTML = "<span></span>", document.querySelector("#" + e.id + " .story-bar span").animate({ width: "100%" }, o); var a = setTimeout(() => { var t = document.getElementById(e.id);
                bootstrap.Modal.getInstance(t).hide(), n.remove(), e.classList.remove("with-story-bar") }, o);
            document.querySelectorAll(".close-stories").forEach(function(t) { t.addEventListener("click", function() { clearTimeout(a), n.remove(), e.classList.remove("with-story-bar") }) }) } }) });
var osDetection = navigator.userAgent || navigator.vendor || window.opera,
    windowsPhoneDetection = /windows phone/i.test(osDetection),
    androidDetection = /android/i.test(osDetection),
    iosDetection = /iPad|iPhone|iPod/.test(osDetection) && !window.MSStream,
    detectionWindowsPhone = document.querySelectorAll(".windowsphone-detection"),
    detectionAndroid = document.querySelectorAll(".android-detection"),
    detectioniOS = document.querySelectorAll(".ios-detection"),
    detectionNone = document.querySelectorAll(".non-mobile-detection");
windowsPhoneDetection ? detectionWindowsPhone.forEach(function(e) { e.classList.add("is-active") }) : androidDetection ? detectionAndroid.forEach(function(e) { e.classList.add("is-active") }) : iosDetection ? detectioniOS.forEach(function(e) { e.classList.add("is-active") }) : detectionNone.forEach(function(e) { e.classList.add("is-active") });
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')),
    tooltipList = tooltipTriggerList.map(function(e) { return new bootstrap.Tooltip(e) }),
    clearInput = document.querySelectorAll(".clear-input");
clearInput.forEach(function(e) { e.addEventListener("click", function() { var e = this.parentElement,
            t = e.querySelector(".form-control");
        t.focus(), t.value = "", e.classList.remove("not-empty") }) });
var formControl = document.querySelectorAll(".form-group .form-control");
formControl.forEach(function(e) { e.addEventListener("focus", () => { e.parentElement.classList.add("active") }), e.addEventListener("blur", () => { e.parentElement.classList.remove("active") }), e.addEventListener("keyup", function(e) { this.value.length > 0 ? this.parentElement.classList.add("not-empty") : this.parentElement.classList.remove("not-empty") }) });
var searchboxToggle = document.querySelectorAll(".toggle-searchbox");
searchboxToggle.forEach(function(e) { e.addEventListener("click", function() { var e = document.getElementById("search");
        e.classList.contains("show") ? e.classList.remove("show") : (e.classList.add("show"), e.querySelector(".form-control").focus()) }) });
var stepperUp = document.querySelectorAll(".stepper-up");
stepperUp.forEach(function(e) { e.addEventListener("click", function() { var t = e.parentElement.querySelector(".form-control");
        t.value = parseInt(t.value) + 1 }) });
var stepperDown = document.querySelectorAll(".stepper-down");
stepperDown.forEach(function(e) { e.addEventListener("click", function() { var t = e.parentElement.querySelector(".form-control");
        parseInt(t.value) > 0 && (t.value = parseInt(t.value) - 1) }) }), document.addEventListener("DOMContentLoaded", function() { document.querySelectorAll(".carousel-full").forEach(e => new Splide(e, { perPage: 1, rewind: !0, type: "loop", gap: 0, arrows: !1, pagination: !1 }).mount()), document.querySelectorAll(".carousel-single").forEach(e => new Splide(e, { perPage: 3, rewind: !0, type: "loop", gap: 16, padding: 16, arrows: !1, pagination: !1, breakpoints: { 768: { perPage: 1 }, 991: { perPage: 2 } } }).mount()), document.querySelectorAll(".carousel-multiple").forEach(e => new Splide(e, { perPage: 4, rewind: !0, type: "loop", gap: 16, padding: 16, arrows: !1, pagination: !1, breakpoints: { 768: { perPage: 2 }, 991: { perPage: 3 } } }).mount()), document.querySelectorAll(".carousel-small").forEach(e => new Splide(e, { perPage: 9, rewind: !1, type: "loop", gap: 16, padding: 16, arrows: !1, pagination: !1, breakpoints: { 768: { perPage: 5 }, 991: { perPage: 7 } } }).mount()), document.querySelectorAll(".carousel-slider").forEach(e => new Splide(e, { perPage: 1, rewind: !1, type: "loop", gap: 16, padding: 16, arrows: !1, pagination: !0 }).mount()), document.querySelectorAll(".story-block").forEach(e => new Splide(e, { perPage: 16, rewind: !1, type: "slide", gap: 16, padding: 16, arrows: !1, pagination: !1, breakpoints: { 500: { perPage: 4 }, 768: { perPage: 7 }, 1200: { perPage: 11 } } }).mount()) });
var autoCloseNotification, notificationCloseButton = document.querySelectorAll(".notification-box .close-button"),
    notificationTaptoClose = document.querySelectorAll(".tap-to-close .notification-dialog"),
    notificationBox = document.querySelectorAll(".notification-box");

function closeNotificationBox() { notificationBox.forEach(function(e) { e.classList.remove("show"), clearTimeout(autoCloseNotification) }) }

function notification(e, t) { var o = document.getElementById(e);
    closeNotificationBox(), setTimeout(() => { o.classList.add("show") }, 250), t && (t += 250, autoCloseNotification = setTimeout(() => { closeNotificationBox() }, t)) }
notificationCloseButton.forEach(function(e) { e.addEventListener("click", function(e) { e.preventDefault(), closeNotificationBox() }) }), notificationTaptoClose.forEach(function(e) { e.addEventListener("click", function(e) { closeNotificationBox() }) });
var autoCloseToast, toastCloseButton = document.querySelectorAll(".toast-box .close-button"),
    toastTaptoClose = document.querySelectorAll(".toast-box.tap-to-close"),
    toastBoxes = document.querySelectorAll(".toast-box");

function closeToastBox() { toastBoxes.forEach(function(e) { e.classList.remove("show"), clearTimeout(autoCloseToast) }) }

function toastbox(e, t) { var o = document.getElementById(e);
    closeToastBox(), setTimeout(() => { o.classList.add("show") }, 100), t && (t += 100, autoCloseToast = setTimeout(() => { closeToastBox() }, t)) }
toastCloseButton.forEach(function(e) { e.addEventListener("click", function(e) { e.preventDefault(), closeToastBox() }) }), toastTaptoClose.forEach(function(e) { e.addEventListener("click", function(e) { closeToastBox() }) });
var appHeader = document.querySelector(".appHeader.scrolled");

function animatedScroll() { window.scrollY > 20 ? appHeader.classList.add("is-active") : appHeader.classList.remove("is-active") }
document.body.contains(appHeader) && (animatedScroll(), window.addEventListener("scroll", function() { animatedScroll() }));
var OnlineText = "Connected to Internet",
    OfflineText = "No Internet Connection";

function onlineModeToast() { var e = document.getElementById("online-toast"); if (document.body.contains(e)) e.classList.add("show");
    else { pageBody.appendChild(document.createElement("div")).id = "online-toast"; var t = document.getElementById("online-toast");
        t.className = "toast-box bg-success toast-top tap-to-close", t.innerHTML = "<div class='in'><div class='text'>" + OnlineText + "</div></div>", setTimeout(() => { toastbox("online-toast", 3e3) }, 500) } }

function offlineModeToast() { var e = document.getElementById("offline-toast"); if (document.body.contains(e)) e.classList.add("show");
    else { pageBody.appendChild(document.createElement("div")).id = "offline-toast"; var t = document.getElementById("offline-toast");
        t.className = "toast-box bg-danger toast-top tap-to-close", t.innerHTML = "<div class='in'><div class='text'>" + OfflineText + "</div></div>", setTimeout(() => { toastbox("offline-toast", 3e3) }, 500) } }

function onlineMode() { var e = document.getElementById("offline-toast");
    document.body.contains(e) && e.classList.remove("show"), onlineModeToast(); var t = document.getElementById("online-toast");
    t.addEventListener("click", function() { this.classList.remove("show") }), setTimeout(() => { t.classList.remove("show") }, 3e3) }

function offlineMode() { var e = document.getElementById("online-toast");
    document.body.contains(e) && e.classList.remove("show"), offlineModeToast(); var t = document.getElementById("offline-toast");
    t.addEventListener("click", function() { this.classList.remove("show") }), setTimeout(() => { t.classList.remove("show") }, 3e3) }
window.addEventListener("online", onlineMode), window.addEventListener("offline", offlineMode);
var uploadComponent = document.querySelectorAll(".custom-file-upload");
uploadComponent.forEach(function(e) { var t = "#" + e.id,
        o = document.querySelector(t + ' input[type="file"]'),
        n = document.querySelector(t + " label"),
        a = document.querySelector(t + " label span"),
        i = a.innerHTML;
    o.addEventListener("change", function(e) { var t = this.value.split("\\").pop();
        tmppath = URL.createObjectURL(e.target.files[0]), t ? (n.classList.add("file-uploaded"), n.style.backgroundImage = "url(" + tmppath + ")", a.innerHTML = t) : (n.classList.remove("file-uploaded"), a.innerHTML = i) }) });
var multiListview = document.querySelectorAll(".listview .multi-level > a.item");

function iosAddtoHome() { new bootstrap.Offcanvas(document.getElementById("ios-add-to-home-screen")).toggle() }

function androidAddtoHome() { new bootstrap.Offcanvas(document.getElementById("android-add-to-home-screen")).toggle() }

function AddtoHome(e, t) { if (t) { var o = localStorage.getItem("MobilekitAddHomeStatus"); "1" === o || 1 === o || (localStorage.setItem("MobilekitAddHomeStatus", 1), window.addEventListener("load", () => { navigator.standalone || matchMedia("(display-mode: standalone)").matches || (androidDetection && setTimeout(() => { androidAddtoHome() }, e), iosDetection && setTimeout(() => { iosAddtoHome() }, e)) })) } else window.addEventListener("load", () => { navigator.standalone || matchMedia("(display-mode: standalone)").matches || (androidDetection && setTimeout(() => { androidAddtoHome() }, e), iosDetection && setTimeout(() => { iosAddtoHome() }, e)) }) }
multiListview.forEach(function(e) { e.addEventListener("click", function() { var e = this.parentNode,
            t = e.parentNode,
            o = e.querySelectorAll(".listview"),
            n = t.querySelectorAll(".multi-level.active"),
            a = t.querySelectorAll(".multi-level.active .listview");
        e.classList.contains("active") ? (e.classList.remove("active"), o.forEach(function(e) { e.style.height = "0px" })) : (e.classList.add("active"), o.forEach(function(e) { e.style.height = "auto"; var t = e.clientHeight + 10 + "px";
            e.style.height = "0px", setTimeout(() => { e.style.height = t }, 0) })), n.forEach(function(e) { e.classList.remove("active"), a.forEach(function(e) { e.style.height = "0px" }) }) }) });
var checkDarkModeStatus = localStorage.getItem("MobilekitDarkMode"),
    switchDarkMode = document.querySelectorAll(".dark-mode-switch"),
    pageBodyActive = pageBody.classList.contains("dark-mode-active");
if (Mobilekit.Dark_Mode.default && pageBody.classList.add("dark-mode-active"), Mobilekit.Dark_Mode.night_mode.enable) { var nightStart = Mobilekit.Dark_Mode.night_mode.start_time,
        nightEnd = Mobilekit.Dark_Mode.night_mode.end_time,
        currentDate = new Date,
        currentHour = currentDate.getHours();
    (currentHour >= nightStart || currentHour < nightEnd) && pageBody.classList.add("dark-mode-active") }

function switchDarkModeCheck(e) { switchDarkMode.forEach(function(t) { t.checked = e }) }

function countdownTimer(e) { var t, o, n, a, i = e;
    i = new Date(i).getTime(), setInterval(() => { let e = (new Date).getTime(),
            r = parseInt((i - e) / 1e3);
        r >= 0 ? (t = parseInt(r / 86400), r %= 86400, o = parseInt(r / 3600), r %= 3600, n = parseInt(r / 60), r %= 60, a = parseInt(r), t = parseInt(t, 10), o = o < 10 ? "0" + o : o, n = n < 10 ? "0" + n : n, a = a < 10 ? "0" + a : a, document.getElementById("countDown").innerHTML = "<div>" + t + "<span>Days</span></div><div>" + o + "<span>Hours</span></div><div>" + n + "<span>Minutes</span></div><div>" + a + "<span>Seconds</span></div>") : document.getElementById("countDown").innerHTML = "<p class='alert alert-outline-warning'>The countdown is over.</p>" }, 1e3) }

function testMode() { var e = "color: #EC4433; font-weight:bold;",
        t = "color: #34C759; font-weight:bold;";

    function o(o, n) { o ? console.log("%c|%c " + n + " : %cEnabled", "color: #444; font-size :1.2em; font-weight: bold;", "color: inherit", t) : 0 == o && console.log("%c|%c " + n + " : %cDisabled", "color: #444; font-size :1.2em; font-weight: bold;", "color: inherit", e) }

    function n(e, t) { console.log("%c|%c " + t + " : %c" + e, "color: #444; font-size :1.2em; font-weight: bold;", "color: inherit", "color:#FE9500!; font-weight: bold;") }

    function a(e) { console.log("%c # " + e, "color: #FFF; background: #444; font-size: 1.2em; padding: 8px 16px; margin-top: 16px; border-radius: 12px 12px 0 0") }
    console.clear(), console.log("%cMobilekit (v" + Mobilekit.version + ")", "font-size: 1.3em; font-weight: bold; color: #FFF; background-color: #FE9500!; padding: 14px 70px; margin-bottom: 16px;"), console.log("%c🚀 TEST MODE ACTIVATED ..!", "font-size: 1em; font-weight: bold; margin: 4px 0;"), a("THEME SETTINGS"), o(Mobilekit.PWA.enable, "PWA"), o(Mobilekit.Dark_Mode.default, "Set dark mode as default theme"), o(Mobilekit.Dark_Mode.night_mode.enable, "Night mode (between " + Mobilekit.Dark_Mode.night_mode.start_time + ":00 and " + Mobilekit.Dark_Mode.night_mode.end_time + ":00)"), o(Mobilekit.Dark_Mode.auto_detect.enable, "Auto detect dark mode"), o(Mobilekit.RTL.enable, "RTL"), o(Mobilekit.Test.enable, "Test mode"), o(Mobilekit.Test.alert, "Test mode alert"), a("PREVIEW INFOS"), n(window.screen.availWidth + " x " + window.screen.availHeight, "Resolution"), n(iosDetection ? "iOS" : androidDetection ? "Android" : windowsPhoneDetection ? "Windows Phone" : "Not a Mobile Device", "Device"), n(window.navigator.language, "Language"), pageBody.classList.contains("dark-mode-active") ? n("Dark Mode", "Current theme") : n("Light Mode", "Current theme"), window.navigator.onLine ? n("Online", "Internet connection") : n("Offline", "Internet connection") }

function themeTesting() { var e = Mobilekit.Test.word,
        t = "";
    window.addEventListener("keypress", function(o) { if ((t += String.fromCharCode(o.keyCode).toLowerCase()).length > e.length && (t = t.slice(1)), t == e || t === e) { if (t = "", Mobilekit.Test.alert) { document.getElementById("appCapsule").appendChild(document.createElement("div")).className = "test-alert-wrapper"; var n = "<div id='alert-toast' class='toast-box toast-center tap-to-close'><div class='in'><div class='text'><h1 class='text-light mb-05'>🤖</h1><strong>" + Mobilekit.Test.alertMessage + "</strong></div></div></div>";
                document.querySelector(".test-alert-wrapper").innerHTML = n, toastbox("alert-toast"), setTimeout(() => { this.document.getElementById("alert-toast").classList.remove("show") }, 4e3) }
            testMode() } }) }
Mobilekit.Dark_Mode.auto_detect.enable && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches && pageBody.classList.add("dark-mode-active"), 1 === checkDarkModeStatus || "1" === checkDarkModeStatus || pageBody.classList.contains("dark-mode-active") ? (switchDarkModeCheck(!0), pageBodyActive || pageBody.classList.add("dark-mode-active")) : switchDarkModeCheck(!1), switchDarkMode.forEach(function(e) { e.addEventListener("click", function() { var e = localStorage.getItem("MobilekitDarkMode"),
            t = pageBody.classList.contains("dark-mode-active");
        1 === e || "1" === e || t ? (pageBody.classList.remove("dark-mode-active"), localStorage.setItem("MobilekitDarkMode", "0"), switchDarkModeCheck(!1)) : (pageBody.classList.add("dark-mode-active"), switchDarkModeCheck(!0), localStorage.setItem("MobilekitDarkMode", "1")) }) }), Mobilekit.Test.enable && themeTesting();