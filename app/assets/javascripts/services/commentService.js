BulletinBoard.factory('commentService',

  ['Restangular',

  function(Restangular) {

    var getRecentComments = function() {
      return Restangular.all('comments').getList();
    }

    return {
      getRecentComments: getRecentComments
    }

  }

])
