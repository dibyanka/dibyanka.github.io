
/*global angular */
var portfolioApp = angular.module('portfolioApp', [ ]);

//create the contrller

portfolioApp.controller('mainController', function ($scope) {
    'use strict';        
    $scope.message = 'The initial app is loading';
                        
});

portfolioApp.run(['$anchorScroll', function ($anchorScroll) 
    {
        $anchorScroll.yOffset = 50;   // always scroll by 50 extra pixels                     
    } ])
    .controller('scrollController', [ '$scope', '$location', '$anchorScroll',
                                            function($scope, $location, $anchorScroll)
                                            {
                                            $scope.goToSection=function(x) {
                                                var newHash= x;
                                                
                                                if($location.hash() !== newHash)
                                                    {
                        // set the $location.hash to `newHash` and
                        // $anchorScroll will automatically scroll to it
                                                $location.hash( x);                                                          
                                                        
                                                    }
                                                else
                                                    {
                        // call $anchorScroll() explicitly,
                        // since $location.hash hasn't changed
                                                $anchorScroll();                                                          
                                                    }                                                
                                            };    
                                                
                                            }
                                            
                                            ]);

