import { tokenList, elements } from './constants';
import { default as onMenuItemClick } from './handler';


for(let i = 0; i < tokenList.length; i++) {
  $("#" +tokenList[i]).click(() => onMenuItemClick(i));
};
