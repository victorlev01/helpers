// Udemy click all videos as checked, for quick exercise - only course;
// expand all sections
document.querySelectorAll('.udi-angle-down').forEach(el=>el.click());
// initialize list of not-watched videos
var listOfVideoNodesCheckboxes = [];
document.querySelectorAll('[data-purpose="progress-toggle-button"]:not(:checked)').forEach(el=>{
 if(el.parentElement.parentElement.querySelector('.udi-play-circle')){
    // add not watched video clickable element to list
   listOfVideoNodesCheckboxes.push(el.parentElement);
 }
})

// check as completed each one with second interval
setInterval(function(){
  var el = listOfVideoNodesCheckboxes.shift();
  el && el.click();
},1000);
