BulletinBoard.controller('PostsIndexCtrl',

  ['$scope', 'postService',

  function($scope, postService) {

    var setPosts = function() {
      postService.getPosts()
        .then(function(posts) {
          $scope.posts = posts;
        })
    }

    setPosts();

    $scope.processPostForm = function() {
      postService.createPost($scope.formData)
        .then(function() {
          setPosts();
        })
    }

  }

]);
