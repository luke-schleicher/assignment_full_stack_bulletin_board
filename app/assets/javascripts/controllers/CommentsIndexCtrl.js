BulletinBoard.controller('CommentsIndexCtrl',

  ['$scope', 'commentService',

  function($scope, commentService) {

    commentService.getRecentComments()
      .then(function(comments) {
        $scope.comments = comments;
      })

  }

]);
