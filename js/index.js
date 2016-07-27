(function(angular){
	angular.module('app',['musicList','spotify'])
	.config(function (SpotifyProvider) {
	    SpotifyProvider.setClientId('cf153e1f94d84b54b824aad18047129e');
	    SpotifyProvider.setRedirectUri('http://ouarrich.github.io/callback.html');
	    SpotifyProvider.setScope('playlist-read-private');
	})
	.controller('Ctrl', ['$scope','Spotify', CtrlFunc]);

	function CtrlFunc($scope, Spotify){
		//$scope.mouseOver = false;
	}
})(angular);