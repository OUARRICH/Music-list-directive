(function(angular){
	return angular.module("musicList", [])
	.directive('musicList', function() {
		return {
			restrict: 'E',
			templateUrl: 'dist/tpl.html'
		};
	});
})(angular);