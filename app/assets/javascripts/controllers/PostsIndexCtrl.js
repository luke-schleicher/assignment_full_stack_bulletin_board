BulletinBoard.controller('PostsIndexCtrl',

  ['$scope', 'postService',

  function($scope, postService) {

    postService.getPosts()
      .then(function(posts) {
        $scope.posts = posts;
      })

  }

]);
