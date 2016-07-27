(function(angular){
	return angular.module("musicList", [])
	.directive('musicList', function() {
		return {
			restrict: 'E',
			scope:{
				customer:"="
			},
			templateUrl: 'dist/tpl.html'
		};
	});
})(angular);