export function runAjax(token, successHandler) {
  $.ajax({
    type: 'GET',
    url: token,
    success: successHandler
  });
}
