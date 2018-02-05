(function () {

    var app = angular.module("app");

    app.config(function ($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
          'self',
          '*://www.youtube.com/**'
        ]);
    });

    app.controller("blogController", ["$scope", "$location", "$routeParams", "blogService", function ($scope, $location, $routeParams, blogService) {
        //$scope.blogs = [
        //    {
        //        title:"this is title",
        //        description: "This is my first video",
        //        type: "text",
        //        imgUrl:"images/home_star.jpg"
        //    },
        //     {
        //         title: "this is title",
        //         description: "This is my second video",
        //         type: "video",
        //         url: "https://www.youtube.com/embed/aApTQ1VjhFA"
        //     }
        //];

        $scope.getBlogs = function () {
            blogService.getBlogs().success(function (response) {
                $scope.blogs = response;
            });
        }

        $scope.getBlog = function () {
            var id = $routeParams.id;
            blogService.getBlog(id).success(function (response) {
                $scope.blog = response;
            });
        }

        $scope.addBlog = function () {
            console.log($scope.blog);
            blogService.addBlog($scope.blog).success(function (response) {
                window.location.href = '#/blog';
            });
        }

        $scope.updateBlog = function () {
            blogService.updateBlog($scope.blog).success(function (response) {
                window.location.href = '#/blog';
            });
        }

        $scope.deleteBlog = function () {
            var id = $routeParams.id;
            blogService.deleteBlog(id).success(function (response) {
                window.location.href = '#/blog';
            });
        }
    }]);
}());