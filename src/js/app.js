import { tokenList, elements } from './constants';
import { default as onMenuItemClick } from './handler';
import { runAjax } from './ajax';



(elements[tokenList[0]].menu).click(function(){
  onMenuItemClick(0);

  function successHandler(data){
    let div = document.createElement('div');
        div.className = "alert alert-success alert-dismissable";
        div.innerHTML = "<a href='#'' class='close' data-dismiss='alert' aria-label='close'>&times;</a><strong>" + data + "</strong>";
        setTimeout(function(){ div.remove() }, 3000);
    $('#homeContent').append(div);
  };

  runAjax('/api/home', successHandler);
});

(elements[tokenList[1]].menu).click(function(){
  onMenuItemClick(1);

  function successHandler(data){
    let div = document.createElement('div');
        div.className = "alert alert-success alert-dismissable";
        div.innerHTML = "<a href='#'' class='close' data-dismiss='alert' aria-label='close'>&times;</a><strong>" + data + "</strong>";
        setTimeout(function(){ div.remove() }, 3000);
    $('#searchContent').append(div);
  };

  runAjax('/api/search', successHandler);
});

(elements[tokenList[2]].menu).click(function(){
  onMenuItemClick(2);

  function successHandler(data){
    let div = document.createElement('div');
        div.className = "alert alert-success alert-dismissable";
        div.innerHTML = "<a href='#'' class='close' data-dismiss='alert' aria-label='close'>&times;</a><strong>" + data + "</strong>";
        setTimeout(function(){ div.remove() }, 3000);
    $('#aboutContent').append(div);
  };

  runAjax('/api/about', successHandler);
});
