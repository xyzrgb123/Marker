  marker = {
    display: ['block', 'inline', 'inline-block', 'list-item', 'flex', 'grid'],
    position: ['relative', 'absolute', 'fixed'],
    transform: []
  };

  exclusion = [];























  document.querySelectorAll('body *:not(script)').forEach(function(i) {
    return i.classList.add('marker');
  });

  document.querySelector('body').classList.add('marker');

  for (j = 0, len = exclusion.length; j < len; j++) {
    i = exclusion[j];
    document.querySelectorAll(i).forEach(function(i) {
      return i.classList.remove('marker');
    });
  }

  marker_go = function() {
    return document.querySelectorAll('.marker').forEach(function(i) {
      var ii, iii, k, len1, ref, results, style;
      style = getComputedStyle(i);
      ref = Object.keys(marker);
      results = [];
      for (k = 0, len1 = ref.length; k < len1; k++) {
        ii = ref[k];
        if (style[ii] !== 'none') {
          i.setAttribute('marker_' + ii, '');
          results.push((function() {
            var l, len2, ref1, results1;
            ref1 = marker[ii];
            results1 = [];
            for (l = 0, len2 = ref1.length; l < len2; l++) {
              iii = ref1[l];
              if (style[ii] === iii) {
                results1.push(i.setAttribute('marker_' + ii, iii));
              } else {
                results1.push(void 0);
              }
            }
            return results1;
          })());
        } else {
          results.push(void 0);
        }
      }
      return results;
    });
  };

  marker_go();

  window.onresize = function(event) {
    return marker_go();
  };
