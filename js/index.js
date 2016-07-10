(function(angular){
	angular.module("app",["musicList"])
	.controller("Ctrl", ["$scope", CtrlFunc]);

	function CtrlFunc($scope){
		$scope.list = {
		    name: 'OUARRICH',
		    address: '92000 Nanterre'
  		};
	}
})(angular);