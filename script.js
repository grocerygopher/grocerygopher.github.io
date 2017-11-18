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
}

document.addEventListener('DOMContentLoaded', function() {showContent('cHome','Grocery Gopher Home');}, false);
