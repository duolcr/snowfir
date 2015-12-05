'use strict';

/**
 * @ngdoc overview
 * @name snowfirApp
 * @description
 * # snowfirApp
 *
 * Main module of the application.
 */
angular
  .module('snowfirApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/article/:articleID', {
        templateUrl: function(urlParams){
          return "views/article/"+urlParams.articleID+".html";
        },
        controller: 'ArticleCtrl',
        controllerAs: 'article'
      })
      .when('/chart/:chartID', {
        templateUrl: function(urlParams){
          return "views/chart/"+urlParams.chartID+".html";
        },
        controller: 'ChartCtrl',
        controllerAs: 'chart'
      })
      .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl',
        controllerAs: 'blog'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
