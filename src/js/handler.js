import { tokenList, elements } from './constants';
import { runAjax } from './ajax';

var activeIndex = 0;

function successHandler(data){
  let div = document.createElement('div');
      div.className = "alert alert-success alert-dismissable";
      div.innerHTML = "<a href='#'' class='close' data-dismiss='alert' aria-label='close'>&times;</a><strong>" + data + "</strong>";
      setTimeout(() => div.remove(), 3000);
  (elements[tokenList[activeIndex]].content).append(div);
}

export default function handler(newIndex){
  (elements[tokenList[activeIndex]].menu).removeClass("active");
  (elements[tokenList[activeIndex]].content).addClass("hide");
  (elements[tokenList[newIndex]].menu).addClass("active");
  (elements[tokenList[newIndex]].content).removeClass("hide");
  activeIndex = newIndex;
  runAjax('/api/' + tokenList[newIndex], successHandler);
}
