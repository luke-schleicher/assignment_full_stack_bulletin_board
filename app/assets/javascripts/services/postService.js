BulletinBoard.factory('postService',

  ['Restangular',

  function(Restangular) {

    var getPosts = function() {
      return Restangular.all('posts').getList(); 
    }

    return {
      getPosts: getPosts
    }

  }

])
