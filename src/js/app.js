import { tokenList, elements } from './constants';
import { default as onMenuItemClick } from './handler';

(elements[tokenList[0]].menu).click(function(){
  onMenuItemClick(0);
});

(elements[tokenList[1]].menu).click(function(){
  onMenuItemClick(1);
});

(elements[tokenList[2]].menu).click(function(){
  onMenuItemClick(2);
});
