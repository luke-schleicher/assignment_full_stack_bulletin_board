var BulletinBoard = angular.module('BulletinBoard', ['ui.router', 'restangular'])

BulletinBoard.config(
  ["$httpProvider",
  function($httpProvider) {
    var token = $('meta[name=csrf-token]')
      .attr('content');
    $httpProvider
      .defaults
      .headers
      .common['X-CSRF-Token'] = token;
  }]);

BulletinBoard.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise("/posts/index");

  $stateProvider
    .state('posts', {
      url: "/posts",
      views: {
        'header': {
          templateUrl: '/templates/posts/header.html',
        },
        'recent-comments': {
          templateUrl: '/templates/posts/recent_comments.html',
          controller: 'CommentsIndexCtrl'
        },
        'main': {
          templateUrl: '/templates/posts/main.html'
        }
      }
    })
    .state('posts.index', {
      url: "/index",
      templateUrl: "/templates/posts/index.html",
      controller: "PostsIndexCtrl"
    })
    .state('posts.show', {
      url: "/show/:id",
      templateUrl: "/templates/posts/show.html",
      controller: "PostsShowCtrl"
    });

});

BulletinBoard.config( ['RestangularProvider', function(RestangularProvider) {

    RestangularProvider.setBaseUrl('/api/v1');
    RestangularProvider.setRequestSuffix('.json');
    RestangularProvider.setDefaultHttpFields({
        "content-type": "application/json"
    });

}]);
