(function () {
    var app = angular.module("app");

    app.service("blogService", function ($http) {
        return {
            getBlogs: function () {
                console.log("Requesting server for blogs....");
                return $http.get('/api/blogs');
            },

            getBlog: function (id) {
                console.log("Fetching Blog with id " + id);
                return $http.get('/api/blog/' + id);
            },

            addBlog: function (blog) {
                console.log("Adding blog to db " + $scope.blog);
                return $http.post('/api/blogs', blog);
            },

            updateBlog: function (blog) {
                console.log("Updating Blog with id " + blog._id);
                return $http.put('/api/blog/' + blog._id, blog);
            },

            deleteBlog: function (id) {
                console.log("Deleting blog...");
                return $http.delete('/api/blogs', id);
            }
        }
    });
}());