export var tokenList = ['home', 'search', 'about'];

export let elements = {};

for(let i = 0; i < tokenList.length; i++) {
  elements[tokenList[i]] = {
    menu: $("#" +tokenList[i]),
    content: $("#" +tokenList[i] + "Content")
  }
}

