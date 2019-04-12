import {createRound1, getCurrentDate} from './data_structures'


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


