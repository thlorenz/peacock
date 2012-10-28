// {{ License }}

;(function () {
  function bootstrap (redeyed, exports) {
    'use strict';

    // {{ spans }}
    
    // {{ default-theme }}
    
    function resolveTheme() { 
      throw new Error('Resolving a theme by filename only works server side. \n' + 
                      'Manually resolve or create a theme {Object} and pass that to "highlight" instead.');
    }

    // {{ peacock-highlight }}

    return { highlight: highlight };
  }

  if (typeof define === 'function' && define.amd) {
    // amd
    define(['redeyed'], function (redeyed) {
      return bootstrap(redeyed);
    });

  } else if (typeof window === 'object') {
    // no amd -> attach to window if it exists
    // Note that this requires 'redeyed' to be defined on the window which in turn requires 'esprima'
    // Therefore those scripts have to be loaded first
    window.peacock = bootstrap(window.redeyed);
  } 
})();
