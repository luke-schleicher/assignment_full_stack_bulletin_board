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

  $urlRouterProvider.otherwise("/posts");

  $stateProvider
    .state('posts', {
      url: "/posts",
      templateUrl: "/templates/posts.html",
      controller: "PostsIndexCtrl"
    });

});

BulletinBoard.config( ['RestangularProvider', function(RestangularProvider) {

    RestangularProvider.setBaseUrl('/api/v1');
    RestangularProvider.setRequestSuffix('.json');
    RestangularProvider.setDefaultHttpFields({
        "content-type": "application/json"
    });

}]);
