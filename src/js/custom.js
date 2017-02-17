var tokenList = ['#home', '#search', '#about'];
var activeIndex = 0;

function onMenuItemClick(newIndex){
  $(tokenList[activeIndex]).removeClass("active");
  $(tokenList[activeIndex] + "Content").addClass("hide");
  $(tokenList[newIndex]).addClass("active");
  $(tokenList[newIndex] + "Content").removeClass("hide");
  activeIndex = newIndex;
}

$(tokenList[0]).click(function(){
  onMenuItemClick(0);
});

$(tokenList[1]).click(function(){
  onMenuItemClick(1);
});

$(tokenList[2]).click(function(){
  onMenuItemClick(2);
});
