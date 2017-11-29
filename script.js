function showContent(sPage, sTitle) {

    var sPage = sPage + ".html";   
    var xhr= new XMLHttpRequest();

    document.getElementById("contentTitle").innerHTML = sTitle;
    xhr.open('GET', sPage, true);

    xhr.onreadystatechange= function() {
        if (this.readyState!==4) return;
        if (this.status!==200) return; //Error Handling
        document.getElementById('contentBody').innerHTML= this.responseText;};

    xhr.send();

    // Add this script.js reference to cDocs.html
    if (sPage =="cDocs.html"){
        var jsFile=document.createElement("script");
            jsFile.setAttribute("type","text/javascript");
            jsFile.setAttribute("src", "script.js");
        document.body.appendChild(jsFile);
        filesadded+="script.js";
        alert("script.js added");
    }
}

document.addEventListener('DOMContentLoaded', function() {showContent('cHome','Grocery Gopher Home');}, false);

function phoneImg(sNav) {

    var sSrc = "image/" + sNav + ".png";

    document.getElementById("phoneOvr").src=sSrc;

}




