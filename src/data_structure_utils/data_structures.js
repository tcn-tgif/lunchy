
var data = {
	[Date.now()]: {
		rounds: [
			{
				name: 'round 1',
				nominations: { },
			},
		]
	}
}


var restaurantList = [
	createRestaurant('mcdonalds'),
	createRestaurant('arbys'), 
	createRestaurant('chick-fil-a'),
	createRestaurant('bombay'),
	createRestaurant('painted pony'),
]

var round1 = 'round 1: nomination'
var round2 = 'round 2'
var round3 = 'round 3'
var round4 = 'round 4'

function createRestaurant(name) {
	return { name: name, wins: 0 }
}

export default function createRound1(data, date) {
	if (data[date] != undefined) {
		console.log('round already exists')
	}

	data[date] = {
		rounds: [
			{
				name: round1,
				nominations: {
				}
			}
		]
	}

	return data
}


