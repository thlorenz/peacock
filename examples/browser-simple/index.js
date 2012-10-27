var $code   =  $('.code')
  , $result =  $('.result')
  ;

function go () {
  $result.empty();

  try {
    var code = $code.val()
      , result = peacock.highlight(code);

    $result.append(result);
  } catch (e) {
    $result.append('In "Original Code": ' + e.toString());
  }
}

$code.val(window.peacock.highlight.toString());

$('.go').click(go);

go();


