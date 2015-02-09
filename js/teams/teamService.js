var app = angular.module('nbaRoutes');

app.service('teamService', function($http, $q){

	this.addNewGame = function(gameObj) {
		var url = "https://api.parse.com/1/classes/" + gameObj.homeTeam;
		
	if (parseInt(gameObj.homeTeamScore) > parseInt(gameObj.opponentScore)) {
		gameObj.won = true;
	}	else {
		gameObj.win = false;
	}
	return $http ({
		method: 'POST',
		url: url,
		data: gameObj
		})
	};


	this.getTeamData = function(team) {
		var dfd = $q.defer();
		var url = 'https://api.parse.com/1/classes/' + team;
		console.log(team)
		$http({
			method: 'GET',
			url: url
		}).then(function(data) {
			var res = data.data.results;
			var wins = 0;
			var losses = 0;
		for (var i = 0; i < res.length; i++) {
			if (res[i].won === true) {
				wins += 1;
		} else if(res[i].won === false) {
			losses += 1;
		}
	}
		res.wins = wins;
		res.losses = losses;
		console.log(res);
		dfd.resolve(res);	
		
	})

		return defered.promise;
	}

});







//--------------------------------------

