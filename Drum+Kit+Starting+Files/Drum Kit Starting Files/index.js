//iterating buttonTag from list of buttontags

//for(variable i=0;);htmlpageElement.selectAll(class drum).lenght;i++) 
for(var i=0;i<document.querySelectorAll(".drum").length;i++){

  //htmlpageElement.selectAll(buttonTags)[indexOfButtonList].executeAction(click_action,execute_anoynums_function on click); 
document.querySelectorAll("button")[i].addEventListener("click",function(){alert("I got clicked")});
}