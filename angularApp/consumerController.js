(function () {
    var app = angular.module('app');

    app.controller('consumerController', ['$scope',function ($scope) {
        $scope.setupAddress = "";
        $scope.setupPin = "";
        $scope.setRoof = false;

        $scope.locationUrl = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?components=country:us&key=AIzaSyBh2XwthfapRjf2Cq3nm2Y1XWDYsFSO2Zo&libraries=places';
        $scope.setupRoof = function () {
            $scope.setRoof = true;
        }

        //$scope.callRestService = function () {
        //    $http({ method: 'GET', url: 'https://maps.googleapis.com/maps/api/place/autocomplete/json?components=country:us&input=' + $scope.address + '&key=AIzaSyBh2XwthfapRjf2Cq3nm2Y1XWDYsFSO2Zo&libraries=places&sensor=true' }).
        //      success(function (data, status, headers, config) {
        //          $scope.results.push(data);  //retrieve results and add to existing results
        //      });
        //}

        $scope.getWeatherReport = function () {
            console.log("getWeatherReport : " + $scope.address );
        }

        $scope.initAutocomplete = initAutocomplete;

        function initAutocomplete() {
            // Create the autocomplete object, restricting the search to geographical
            // location types.
            var autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), { types: ['(cities)'] });
            //Restricts the autocomplete to a specific country
            autocomplete.setComponentRestrictions({ 'country': 'us' });
            // When the user selects an address from the dropdown, populate the address
            // fields in the form.
            google.maps.event.addListener(autocomplete, 'place_changed', function () {
                var place = autocomplete.getPlace();
                if (place.geometry) {
                    $scope.latitude = place.geometry.location.lat();
                    $scope.longitude = place.geometry.location.lng();
                    $scope.$apply();
                    console.log("lat: " + place.geometry.location.lat());
                }
            });
        }

       
    }]);

}());