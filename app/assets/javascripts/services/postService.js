BulletinBoard.factory('postService',

  ['Restangular',

  function(Restangular) {

    var getPosts = function() {
      return Restangular.all('posts').getList();
    }

    var createPost = function(formData) {
      return Restangular.all('posts').post({
        post: {
          title: formData.title,
          author: formData.author,
          body: formData.body
        }
      });
    }

    return {
      getPosts: getPosts,
      createPost: createPost
    }

  }

])
