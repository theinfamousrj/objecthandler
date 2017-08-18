'usa strict'

let chai = require('chai')
let expect = chai.expect

let ObjHandler = require('./index.js')

describe('.getKeys()', () => {
    it('gets the keys of an object in a list, with dot notation', (done) => {
        let objectToGetKeysOf = { someString: "Certainly a string.", horse: true, potion: 1, obby: { deeper: true, deepness: { stophere: true } } }
        
        let objectKeys = []
        ObjHandler.getKeys(objectToGetKeysOf, null, objectKeys)
        
        let expectedKeys = ['someString', 'horse', 'potion', 'obby', 'obby.deeper', 'obby.deepness', 'obby.deepness.stophere']
        
        expect(objectKeys).to.be.an('array').to.include.members(expectedKeys)
        done()
    })
    
    it('does not contain any unexpected nonsense', (done) => {
        let objectToGetKeysOf = { someString: "Certainly a string.", horse: true, potion: 1, obby: { deeper: true, deepness: { stophere: true } } }
        
        let objectKeys = []
        ObjHandler.getKeys(objectToGetKeysOf, null, objectKeys)
        
        let expectedKeys = ['sanityCheck', 'thisIsNotAProp', 'logistics', 'key.property', 'this', 1]
        
        expect(objectKeys).to.be.an('array').to.not.include.members(expectedKeys)
        done()
    })
    
    it('ensures that if you pass it something other than an object, it dies', (done) => {
        let nonObjectToGetKeysOf = 12345
        
        expect(function () { ObjHandler.getKeys(nonObjectToGetKeysOf, null, []); }).to.throw(Error, 'Item to check must be an object.')
        done()
    })
    
    it('ensures that if you pass it nothing, it dies', (done) => {
        expect(ObjHandler.getKeys).to.throw(Error, 'Item to check must be an object.')
        done()
    })
})

describe('.hasRequiredKeys()', () => {
    it('ensures that the required keys exist in the object', (done) => {
        let objectToGetKeysOf = { someString: "Certainly a string.", horse: true, potion: 1, obby: { deeper: true, deepness: { stophere: false, evenDeeper: { wow: 'that is deep', right: { nope: 'we can go deeper' } } } } }
        let expectedKeys = ['someString', 'horse', 'potion', 'obby', 'obby.deeper', 'obby.deepness', 'obby.deepness.stophere', 'obby.deepness.evenDeeper', 'obby.deepness.evenDeeper.right.nope']
        let hasKeys = ObjHandler.hasRequiredProperties(objectToGetKeysOf, expectedKeys)
        
        expect(hasKeys).to.be.true
        done()
    })
    
    it('ensures that if required keys are missing, the result is clear', (done) => {
        let objectToGetKeysOf = { someString: "Certainly a string.", horse: true, potion: 1, obby: { deeper: true, deepness: { stophere: false, evenDeeper: { wow: 'that is deep', right: { nope: 'we can go deeper' } } } } }
        let expectedKeys = ['someString', 'horse', 'potion', 'obby', 'obby.deeper', 'obby.deepness', 'obby.deepness.stophere', 'whyAskWhy.drinkBudDry']
        let hasKeys = ObjHandler.hasRequiredProperties(objectToGetKeysOf, expectedKeys)
        
        expect(hasKeys).to.be.false
        done()
    })
    
    it('ensures that if you pass it no required keys, it returns true', (done) => {
        let objectToGetKeysOf = { someString: "Certainly a string.", horse: true, potion: 1, obby: { deeper: true, deepness: { stophere: false, evenDeeper: { wow: 'that is deep', right: { nope: 'we can go deeper' } } } } }
        let expectedKeys = []
        let hasKeys = ObjHandler.hasRequiredProperties(objectToGetKeysOf, expectedKeys)
        
        expect(hasKeys).to.be.true
        done()
    })
    
    it('ensures that if you pass it something other than an object, it dies', (done) => {
        let nonObjectToGetKeysOf = 12345
        let expectedKeys = ['someString', 'horse', 'potion', 'obby', 'obby.deeper', 'obby.deepness', 'obby.deepness.stophere', 'whyAskWhy.drinkBudDry']
        //let hasKeys = ObjHandler.hasRequiredKeys(nonObjectToGetKeysOf, expectedKeys)
        
        expect(function () { ObjHandler.hasRequiredProperties(nonObjectToGetKeysOf, expectedKeys); }).to.throw(Error, 'Item to check must be an object.')
        done()
    })
    
    it('ensures that if you pass it nothing, it dies', (done) => {
        expect(ObjHandler.hasRequiredProperties).to.throw(Error, 'Item to check must be an object.')
        done()
    })
})