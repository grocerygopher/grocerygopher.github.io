function showPrivacy() {
    document.getElementById("contentTitle").innerHTML = "Privacy Policy";

var xhr= new XMLHttpRequest();
xhr.open('GET', 'cPrivacy.html', true);
xhr.onreadystatechange= function() {
    if (this.readyState!==4) return;
    if (this.status!==200) return; // or whatever error handling you want
    document.getElementById('contentBody').innerHTML= this.responseText;
};
xhr.send();

}
