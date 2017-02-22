import onMenuItemClick from 'handler';

$(tokenList[0]).click(function(){
  onMenuItemClick(0);
});

$(tokenList[1]).click(function(){
  onMenuItemClick(1);
});

$(tokenList[2]).click(function(){
  onMenuItemClick(2);
});

// for(i = 0; i < 3; i++) {
//   $(tokenList[i]).click(function(){
//     onMenuItemClick(i);
//   });
// };