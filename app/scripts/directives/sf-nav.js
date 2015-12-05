'use strict';

/**
 * @ngdoc directive
 * @name snowfirApp.directive:sfNav
 * @description
 * # sfNav
 */
angular.module('snowfirApp')
  .directive('sfNav', function ($location) {
      function link(scope, element, attrs) {
        scope.$on("$routeChangeSuccess", function(event, previous, current){
          $(".nav").find(".active").removeClass("active");
          var currentNode =  $(".nav").find("a[href='#"+$location.url()+"']");
          if(currentNode) {
            currentNode.parent().addClass("active");
          }
          else{
            $(".nav").find("a[href='#"+currentNode.parent().attr("sf-root-nav")+"']");
          }


        });
      }
      return {
        link: link,
        restrict: "A",
        templateUrl: "views/sf-nav.html"
      };
  });
