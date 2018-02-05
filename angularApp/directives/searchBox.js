(function () {
    var app = angular.module('app');

    app.directive('myOnKeyDownCall', function () {
        return function (scope, element, attrs) {
            var numKeysPress = 0;
            element.bind("keydown keypress", function (event) {
                numKeysPress++;
                if (numKeysPress >= 3) {
                    scope.$apply(function () {
                        if (element.val().length >= 3) {
                            scope.$eval(attrs.myOnKeyDownCall);
                        }
                    });
                    event.preventDefault();
                }
            });
        };
    });

}());