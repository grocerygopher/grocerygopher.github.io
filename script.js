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

function showTips(sTip) {

    var sTip = "cDocs-" + sTip + ".html";
    var xhr= new XMLHttpRequest();

    xhr.open('GET', sTip, true);

    xhr.onreadystatechange= function() {
        if (this.readyState!==4) return;
        if (this.status!==200) return; //Error Handling
        document.getElementById('tipsTricks').innerHTML= this.responseText;};

    xhr.send();
}

document.addEventListener('DOMContentLoaded', function() {showContent('cHome','Grocery Gopher Home');}, false);

function phoneImg(sId,sNav,sPage) {

    var sSrc = "image/" + sNav + ".png";

    var iSrc = document.getElementById("phoneOvr").getAttribute("src");
    if (sSrc != iSrc) {
        clearStyle();
        showTips(sNav);
        document.getElementById("phoneOvr").src=sSrc;
        document.getElementById(sId).style.color='#cc0000';
    } else return;
    
    if (sPage == '1') {

        clearStyle();

        document.getElementById('a6a7').style.display='inline';
        
        document.getElementById('a1').text='Shopping List';
        document.getElementById('a1').onclick=function () {
            phoneImg('a1','tpx','0'); // do your stuff
            return false; // <-- to suppress the default link behaviour
        };

        document.getElementById('a2').text='Pantry - All Groceries';
        document.getElementById('a2').style.color='#cc0000';
        document.getElementById('a2').onclick=function () {
            phoneImg('a2','pantry','0');
            return false;
        };

        document.getElementById('a3').text='Adding Groceries';
        document.getElementById('a3').onclick=function () {
            phoneImg('a3','add','0');
            return false;
        };

        document.getElementById('a4').text='Editing Groceries';
        document.getElementById('a4').onclick=function () {
            phoneImg('a4','edit','0');
            return false;
        };

        document.getElementById('a5').text='Deleting Groceries';
        document.getElementById('a5').onclick=function () {
            phoneImg('a5','delete','0');
            return false;
        };

        document.getElementById('a6').text='Rate Me Please!';
        document.getElementById('a6').onclick=function () {
            phoneImg('a6','rate','0');
            return false;
        };

        document.getElementById('a7').text='Settings';        
        document.getElementById('a7').onclick=function () {
            phoneImg('a7','settings','2');
            return false;
        };
    }

    if (sPage == '2') {

        clearStyle();

        document.getElementById('a6a7').style.display='none';
        
        document.getElementById('a1').text='General Settings';
        document.getElementById('a1').style.color='#cc0000';
        document.getElementById('a1').onclick=function () {
            document.getElementById('a2').text='Sharing Your List';
            document.getElementById('a2sub').style.display='none';
            document.getElementById('a3').text='Department Manager';
            document.getElementById('a3sub').style.display='none';
            phoneImg('a1','settings','0');
            return false;
        };

        document.getElementById('a2').text='Sharing Your List';
        document.getElementById('a2').onclick=function () {
            document.getElementById('a2').text='Sharing Your List:';
            document.getElementById('a2').style.color='#cc0000';
            document.getElementById('a2sub').style.display='inline';    
            document.getElementById('a3').text='Department Manager';
            document.getElementById('a3').style.color='#000000';
            document.getElementById('a3sub').style.display='none';
            phoneImg('a2','drive-depts','0');
            return false;
        };

        document.getElementById('a3').text='Department Manager';
        document.getElementById('a3').onclick=function () {            
            document.getElementById('a2').text='Sharing Your List';
            document.getElementById('a2').style.color='#000000';
            document.getElementById('a2sub').style.display='none';
            document.getElementById('a3').text='Department Manager:';
            document.getElementById('a3').style.color='#cc0000';
            document.getElementById('a3sub').style.display='inline';
            phoneImg('a3','drive-depts','0');
            return false;
        };

        document.getElementById('a4').text='External Storage';
        document.getElementById('a4').onclick=function () {
            document.getElementById('a2').text='Sharing Your List';
            document.getElementById('a2sub').style.display='none';
            document.getElementById('a3').text='Department Manager';
            document.getElementById('a3sub').style.display='none';
            phoneImg('a4','storage','0');
            return false;
        };

        document.getElementById('a5').text='Pantry - All Groceries';
        document.getElementById('a5').onclick=function () {
            document.getElementById('a2').text='Sharing Your List';
            document.getElementById('a2sub').style.display='none';         
            document.getElementById('a3').text='Department Manager';
            document.getElementById('a3sub').style.display='none';
            phoneImg('a5','pantry','1');
            return false;
        };

    }

    function clearStyle() {
        var elems = document.getElementsByClassName('iLink');
        for (var i = 0; i < elems.length; ++i) {
            elems[i].style.color='#000000';
        }
    }



}




