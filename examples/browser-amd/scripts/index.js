require(['jquery', 'peacock'], function ($, peacock) {
  var $code          =  $('.code')
    , $result        =  $('.result')
    , $styleSelector =  $('#style-selector')
    , $styles        =  $('#style-link')
    , stylesPath     =  '../../styles'
    ;

  function escapeHtml (s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); 
  }

  function go () {
    var code;
    $result.empty();

    try {
      code = $code.val();
      var result = peacock.highlight(code);
      $result.append(result);
    } catch (e) {
      var raw = [ 
          '<div class="highlight">'
        , '<pre>' 
        , escapeHtml(code)
            .split('\n')
            .map(function (s) { return '<span>' + s + '</span>'; })
            .join('\n')
        , ''
        , e.toString()
        , '</pre>'
        , '</div>'
      ].join('\n');

      $result.append(raw);
    }
  }

  $code.val(peacock.highlight.toString());
  $code.on('input propertychange', go);

  $styleSelector.on('change', function (event) {
    var el = $styleSelector[0];
    var selectedStyle = el.options[el.selectedIndex].text;
    $styles.attr('href', stylesPath + '/' + selectedStyle + '.css');
  });

  go();
});
