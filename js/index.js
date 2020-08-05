var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
};

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demodots");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}

$(document).ready(function(){

var languageSelect = document.getElementById('LanguageSelect');
var selectedLanguage = readCookie('language');

if ((selectedLanguage == 'english') || (selectedLanguage == 'hebrew') || (selectedLanguage == 'spanish')) {
$(".language select").val(selectedLanguage);
var sel = $(".language select").val(selectedLanguage);
if (selectedLanguage == 'english') {
        $(".english").css("display", "block");
        $(".spanish").css("display", "none"); 
        $(".hebrew").css("display", "none"); 
     }else if (selectedLanguage =='spanish') {
        $(".english").css("display", "none");
        $(".spanish").css("display", "block");
        $(".hebrew").css("display", "none");
     }else if (selectedLanguage =='hebrew') {
        $(".english").css("display", "none");
        $(".spanish").css("display", "none");
        $(".hebrew").css("display", "block");
     }
 }

$(".language select").bind('change', function() {
 //on change set cookie and...

//  console.log(language)
 setCookie('language', this.value, 365);
 
 //change css depending on what is selected
     var sel = $(".language select").val();
     if (sel=='english') {
        $(".english").css("display", "block");
        $(".spanish").css("display", "none");
        $(".hebrew").css("display", "none");
     }else if (sel=='spanish') {
        $(".english").css("display", "none");
        $(".spanish").css("display", "block");
        $(".hebrew").css("display", "none"); 
     }else if (sel=='hebrew') {
        $(".english").css("display", "none");
        $(".spanish").css("display", "none");
        $(".hebrew").css("display", "block"); 
     
     }
     

});

function saveLanguage(cookieValue)
{
 var sel = document.getElementById('LanguageSelect');
 setCookie('language', cookieValue, 365);
}

function setCookie(cookieName, cookieValue, nDays) {
 var today = new Date();
 var expire = new Date();

 if (nDays==null || nDays==0)
     nDays=1;

 expire.setTime(today.getTime() + 3600000*24*nDays);
 document.cookie = cookieName+"="+escape(cookieValue) + ";expires="+expire.toGMTString();
}

function readCookie(name) {
var nameEQ = name + "=";
var ca = document.cookie.split(';');
for(var i = 0; i < ca.length; i++) {
 var c = ca[i];
 while (c.charAt(0) == ' ') c = c.substring(1, c.length);
 if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
}
return null;
}

});
