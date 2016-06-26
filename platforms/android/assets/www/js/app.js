angular.module('pageSlide', ['ionic'])
    .value('wobbHeader', '<div class="h1 title" id="header-logo">wo<span class="red">b</span>b</div>')
    .controller('HomeController', function($state, $ionicNavBarDelegate, $stateParams, $ionicHistory) {
        $ionicHistory.clearHistory();
        $ionicNavBarDelegate.showBackButton(false);
        if ($stateParams.authed) {
            if (!$stateParams.tut) {
                $state.go('tutorial');
            }

        } else {
            $state.go('login');
        }
        this.title = 'wobb';
        this.random = 'Job-' + Math.floor(Math.random() * 5);
        this.clicked = function() {
            $ionicNavBarDelegate.showBackButton(true);
        };
    })
    .controller('TutorialController', function() {
        this.title = 'Tutorial';
    })
    .controller('JobController', function($stateParams) {
        this.title = $stateParams.id;
        while (1) {
            this.random = 'Job-' + Math.floor(Math.random() * 5);
            if (this.random !== this.title) break;
        }
    })
    .controller('UserController', function() {
        this.title = 'User Panel';
    })
    .config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
        $stateProvider
            .state('home', {
                url: "/?authed?tut",
                templateUrl: "templates/home.html",
                controller: 'HomeController as home',
            })
            .state('login', {
                url: "/login",
                templateUrl: "templates/login.html",
                controller: function($ionicNavBarDelegate) {
                    $ionicNavBarDelegate.showBackButton(false);
                },
            })
            .state('register', {
                url: "/register",
                templateUrl: "templates/register.html",
                controller: function($timeout, $ionicNavBarDelegate) {
                    $timeout(function() {
                        $ionicNavBarDelegate.showBackButton(true);
                    }, 100);
                },
            })
            .state('tutorial', {
                url: "/tutorial",
                templateUrl: "templates/tutorial.html",
                controller: 'TutorialController as tutorial',
            })
            .state('job', {
                url: "/job/:id",
                templateUrl: "templates/job.html",
                controller: 'JobController as job',
            })
            .state('user', {
                url: "/user",
                templateUrl: "templates/user.html",
                controller: 'UserController as user',
            })
            .state('preference', {
                url: "/user/preference",
                templateUrl: "templates/preference.html",
                controller: function($scope) {
                    $scope.title = 'Preference';
                },
            })
            .state('account', {
                url: "/user/account",
                templateUrl: "templates/preference.html",
                controller: function($scope) {
                    $scope.title = 'Account';
                },
            })
            .state('history', {
                url: "/user/history",
                templateUrl: "templates/preference.html",
                controller: function($scope) {
                    $scope.title = 'History';
                },
            })
            .state('bookmark', {
                url: "/user/bookmark",
                templateUrl: "templates/preference.html",
                controller: function($scope) {
                    $scope.title = 'Bookmark';
                },
            });
        $urlRouterProvider.otherwise("/");

        /*Maximum number of view elements to cache in the DOM.
        When the max number is exceeded, the view with the longest time period
        since it was accessed is removed. Views that stay in the DOM cache
        the view's scope, current state, and scroll position.
        The scope is disconnected from the $watch cycle when it is
        cached and reconnected when it enters again.
        When the maximum cache is 0, the leaving view's element will be removed
        from the DOM after each view transition, and the next time the same view is shown,
        it will have to re-compile, attach to the DOM, and link the element again.
        This disables caching, in effect.*/
        $ionicConfigProvider.views.maxCache(0);

        /* platform -> auto ios or android. ios. android. none.*/
        // $ionicConfigProvider.views.transition('ios');

        /*Tab position. Android defaults to top and iOS defaults to bottom.*/
        // $ionicConfigProvider.tabs.position('bottom');

        /*Sets the maximum number of templates to prefetch from the
        templateUrls defined in $stateProvider.state. If set to 0,
        the user will have to wait for a template to be fetched the
        first time when navigating to a new page. Default 30.*/
        $ionicConfigProvider.templates.maxPrefetch(0);

        /* Which side of the navBar to align the title. Default center. android default -> left. left center right*/
        // $ionicConfigProvider.navBar.alignTitle('center');

        /*Tab style. Android defaults to striped and iOS defaults to standard.*/
        // $ionicConfigProvider.tabs.style('striped');

    });
