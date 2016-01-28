(function () {
  'use strict';

  angular.module('coreDirectives')
    .directive("loading", loading);

  function loading() {
    return {
      replace: true,
      restrict: 'EA',
      templateUrl: 'commons/components/loading/main.html'
    };
  }
})();