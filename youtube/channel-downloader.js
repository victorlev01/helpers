/* To collect links call on youtube channel (Using ClipConverter):
Not very stable and can break on large channels
->
 var links = Array.prototype.map.call(document.querySelectorAll('[id=thumbnail]'),function(link){
 return link.href;
});
//var code = ('var links = ["'+ links.join('","') + '"]');
//navigator.clipboard.writeText(code)
links;
then goto https://www.clipconverter.cc/2/
Paste collected links into "links" variable
*/
var links = ["https://www.youtube.com/watch?v=grEKMHGYyns","https://www.youtube.com/watch?v=gR6nycuZKlM&t=593s"].reverse();
var i = 0;
var count = 0;
async function download(){
    var link = links[0];
	count++;
	i++;
	if(count == 5){
	    var promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("ready!"), 1500000)
       });
       var result = await promise;
	}
    var frameId = 'iFrameElement' + i;
    var oldFrame = document.getElementById(frameId);
    oldFrame && oldFrame.remove();
    var iFrameElement = document.createElement('iframe');
    // this will grab the url and split by # assuming you're passing the intended url after #
    // if the intended url is already in the address bar, simply use 
    // window.location.href
    var url = 'https://www.clipconverter.cc/2/';
    // create the iframe element
    iFrameElement.id = frameId;
    iFrameElement.src =
        url;
    iFrameElement.width = document.body.scrollWidth;
    iFrameElement.height = window.outerHeight;
    iFrameElement.scrolling = "auto"
    // create a new div to append the iframe to
    var newDiv = document.createElement('div')
    newDiv.appendChild(iFrameElement)
    // append the div to body
    document.body.appendChild(newDiv);
    var ifFrame = document.getElementById(frameId);
    var promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("ready!"), 10000)
    });
    var result = await promise;
    var mediaLink = ifFrame.contentDocument.getElementById('mediaurl');
    mediaLink.value = link;
    var submit = ifFrame.contentDocument.getElementById('submiturl');
    submit.click();
    var promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("ready!"), 20000)
    });
    var result = await promise;
    ifFrame.contentDocument.getElementById('MP4').click();
    var promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("ready!"), 10000)
    });
    var result = await promise;
    ifFrame.contentDocument.getElementById('submitconvert').querySelector('input').click();
    var promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("ready!"), 15000)
    });
    var result = await promise;
	var downloadBtn = ifFrame.contentDocument.getElementById('downloadbutton');
	if(!downloadBtn){
		 console.error(links[0]);
		   var promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("ready!"), 1500000)
    });
    var result = await promise;
		 return 
	//  links.splice(0,1);
	  // if(links.length>0){
       //  download();
		// return;
//	}
	}
    downloadBtn.click();
    var promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("ready!"), 15000)
    });
    var result = await promise;
	newDiv.remove();
	links.splice(0,1);
	if(links.length>0){
         download();
	}
}
download();
