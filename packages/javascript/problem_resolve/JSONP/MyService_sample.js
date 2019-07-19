// programa A
function addScriptTag(src) {
    let script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.src = srcl;
    document.body.appendChild(script);
}

window.onload = function() {
    // call  teleservice
    addScriptTag("http://localhost:20002/MyService.ashx?callback=person");
}

// callback function person
function person(data) {
    console.log(data.name + " is a " + data.sex);
}