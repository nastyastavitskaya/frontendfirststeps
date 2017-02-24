import { tokenList, elements } from './constants';

var activeIndex = 0;

export default function handler(newIndex){
  (elements[tokenList[activeIndex]].menu).removeClass("active");
  (elements[tokenList[activeIndex]].content).addClass("hide");
  (elements[tokenList[newIndex]].menu).addClass("active");
  (elements[tokenList[newIndex]].content).removeClass("hide");
  activeIndex = newIndex;
}