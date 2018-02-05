(function () {
    var app = angular.module('app');

    app.directive('autoCompleteDirective', function ($http) {
        return {
            restrict: 'A',
            scope: {
                url: '@',
                ngModel:'='
            },
            require: 'ngModel',
            link: function (scope, ele, attrs) {
                ele.autocomplete({
                    source: function (req, res) {
                        //$http({ method: 'jsonp', url: scope.url, params: { q: req.term } })
                        //    .success(function (data) {
                        //        res(data);
                        //    })
                        //    .error(function () {
                        //        console.log("Could not load cities");
                        //    });
                    },
                    minLength: 3,
                    select: function (event, ui) {
                        scope.ngModel = ui.item.value;
                        scope.$apply();
                    }
                })
            }
        }
    });

}());

////auto-complete-directive url="{{locationUrl}}"