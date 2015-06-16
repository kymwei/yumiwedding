var app = angular.module('yuyu-wedding', ['ngRoute']);


app.config(function ($routeProvider) {


    $routeProvider
        .when('/', {
            templateUrl: 'home.html'
        })
        .when('/story', {
            templateUrl: 'story.html'
        })
        .when('/photo', {
            templateUrl: 'photo.html'
        })
        .when('/RSVP', {
            templateUrl: 'rsvp.html'
        })
        .when('/party', {
            templateUrl: 'party.html'
        })
        .when('/travel', {
            templateUrl: 'travel.html'
        })
        .when('/', {
            templateUrl: 'home.html'
        })
        .when('/accommodation', {
            templateUrl: 'accommodation.html'
        });


});


app.controller('cfgController', function ($scope) {
    $scope.message = "Hello world";

}).controller('photoController', function ($scope) {
    //$(document).foundation()
    $scope.message = "Hello world";

});


app.directive('photoDirevtive', function () {
        return {
            restrict: 'A',
            link: function (scope, elem, attrs) {
                debugger
                $(elem).foundation();

            }
        };
    })
    .directive('countDirvtive', function () {
        return {
            restrict: 'A',
            link: function (scope, elem, attr) {
                /*CountDown*/
                $(elem).countdown({
                    until: new Date(2015, 9, 13)
                });

            }
        };
    });

