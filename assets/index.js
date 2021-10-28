// ugly code ahead, bring a bag to throw up in

console.warn("Only supports iPhone for now!")

var agent = navigator.userAgent

var removed = agent.split(/(\s+)/).splice(0, 15);
var version = String(removed.splice(10, 1)).replace("_", ".").replace("_", "")
var versionnumber = Number(version)
var versiondisplay = String(agent.split(/(\s+)/).splice(0, 15).splice(10, 1)).replace("_", ".").replace("_", ".")

if (removed.includes('iPhone')) {
    console.log("iOS found!")
} else {
    console.log("Not iPhone")
}

function iOSVersion() {
    console.log(removed)
    document.getElementById("version").innerHTML = versiondisplay
}

$(document).ready(function () {
    var classCycle = ['bg1', 'bg2', 'bg3', 'bg4', 'bg5', 'bg6', 'bg7', 'bg8', 'bg9', 'bg10', 'bg11', 'bg12', 'bg13', 'bg14', 'bg15',];

    var randomNumber = Math.floor(Math.random() * classCycle.length);
    var classToAdd = classCycle[randomNumber];

    $('body').addClass(classToAdd);

});

function Jailbreak() {
    var status = document.getElementById("status")
    if (versionnumber <= Number("14.51")) {
        status.innerHTML = "You can jailbreak with the tools under:"
    } else {
        status.innerHTML = "Sorry, but you cannot jailbreak your device."
    }
}

function getUserAgent() {
    document.getElementById("useragent").innerHTML = agent
}