angular.module('pageSlide', ['ionic'])
.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "templates/home.html",
            controller: function($scope) {
                $scope.random = 'Smth-' + Math.floor(Math.random() * 5);
            },
        })
        .state('random', {
            url: "/random/:id",
            templateUrl: "templates/random.html",
            controller: function($scope, $stateParams) {
                $scope.title = $stateParams.id;
                while (true) {
                    $scope.random = 'Smth-' + Math.floor(Math.random() * 5);
                    if ($scope.random !== $scope.title) {
                        break;
                    }
                }
            },
        });


    $urlRouterProvider.otherwise("/");

     /*Maximum number of view elements to cache in the DOM. When the max number is exceeded, the view with the longest time period since it was accessed is removed. Views that stay in the DOM cache the view's scope, current state, and scroll position. The scope is disconnected from the $watch cycle when it is cached and reconnected when it enters again. When the maximum cache is 0, the leaving view's element will be removed from the DOM after each view transition, and the next time the same view is shown, it will have to re-compile, attach to the DOM, and link the element again. This disables caching, in effect.*/
    $ionicConfigProvider.views.maxCache(0);

     /* platform -> auto ios or android. ios. android. none.*/
    // $ionicConfigProvider.views.transition('ios');
    
     /*Tab position. Android defaults to top and iOS defaults to bottom.*/
    // $ionicConfigProvider.tabs.position('bottom');
    
     /*Sets the maximum number of templates to prefetch from the templateUrls defined in $stateProvider.state. If set to 0, the user will have to wait for a template to be fetched the first time when navigating to a new page. Default 30.*/
    $ionicConfigProvider.templates.maxPrefetch(0);

    
     /* Which side of the navBar to align the title. Default center. android default -> left. left center right*/
    // $ionicConfigProvider.navBar.alignTitle('center');

     /*Tab style. Android defaults to striped and iOS defaults to standard.*/
    // $ionicConfigProvider.tabs.style('striped');

});
