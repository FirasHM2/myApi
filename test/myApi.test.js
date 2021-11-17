const chai = require('chai')
const expect = chai.expect

const capitalizer = require('./testMocha')

describe("capitalizer capitalize()", () => {

	it("should capitalize a lowercase string", ()=> {
		expect(capitalizer.capitalize('test')).to.equal("TEST")
	})

})