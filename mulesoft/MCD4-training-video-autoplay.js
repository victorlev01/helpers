// For <ulesoft developers who want to complete Mule 4 Developer course using only exercises, without videos
// I completed it both-ways, so i reccomend to watch them before going to challenges
// Script just changes video to next one after it completes
// https://training.mulesoft.com/course/development-fundamentals-mule4

function nextLesson(){
var title = document.querySelector('h4[id*=contentTitle]').textContent;
var numberPattern = /\d+/g;
var times = title.match(numberPattern).reverse();
if(times.length>0){
 var max = times[0];
 var min = times[1];
 var pageCount = document.getElementById('eb-cp-pgnum').textContent.match(numberPattern).reverse()[0];
 var waitTime = +max/+pageCount;
 document.getElementById('eb-cp-next').click();
 setTimeout(nextLesson,waitTime * 1000 * 60);
}
else{
    document.getElementById('eb-cp-next').click();
	setTimeout(nextLesson,5000);
}
}
nextLesson();
