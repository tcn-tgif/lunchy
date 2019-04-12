
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
       
Date.prototype.yyyymmdd = function() {
	var mm = this.getMonth() + 1 // getMonth() is zero-based
	var dd = this.getDate()

	return [this.getFullYear(),
		(mm>9 ? '' : '0') + mm,
		(dd>9 ? '' : '0') + dd
	].join('')
}

// used as the key for our data model. each date will hold all of the round info
export function getCurrentDate() {
	var date = new Date()
	return date.yyyymmdd()
}

export function createRestaurant(name) {
	return { name: name, wins: 0 }
}

export function createRound1(data, date) {
	if (data[date] != undefined) {
		throw new Error('round already exists')
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


