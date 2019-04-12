import {addNomination, createRound1, createRestaurant, getCurrentDate} from './data_structures'

// showing what our data structure looks like
var exampleData = {
	[Date.now()]: {
		rounds: [
		{
			name: 'round 1',
			nominations: { },
		},
		]
	}
}

it('creates round 1', () => {
	let date = getCurrentDate()

	let data = createRound1({}, date)

	expect(data).toHaveProperty(date.toString())
})

it('fails to create a round that already exists', () => {
	let date = getCurrentDate()

	let data = createRound1({}, date)

	expect(() => {
		return createRound1(data, date)
	}).toThrow()
})

it('adds a nomination', () => {
	let date = getCurrentDate()

	let data = createRound1({}, date)

	let restaurant = createRestaurant('mcdonalds')

	data = addNomination(data, date, restaurant)

	expect(data[date].rounds[0].nominations[restaurant.name]).toEqual(1)
})
