const rewire = require("rewire")
const Signin = rewire("./Signin")
const validate = Signin.__get__("validate")
// @ponicode
describe("componentWillMount", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Anas", "Michael", "Pierre Edouard"], ["Edmond", "Pierre Edouard", "Edmond"], ["Edmond", "Michael", "George"]]
        inst = new Signin.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentWillMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("handleFormSubmit", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Anas", "Michael", "Pierre Edouard"], ["Michael", "George", "George"], ["George", "George", "Pierre Edouard"]]
        inst = new Signin.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleFormSubmit({})
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.handleFormSubmit(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("validate", () => {
    test("0", () => {
        let param1 = [["Michael", "Jean-Philippe", "Edmond"], ["Edmond", "Anas", "Edmond"], ["Anas", "Jean-Philippe", "Anas"]]
        let callFunction = () => {
            validate(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param1 = [["George", "Michael", "Edmond"], ["Edmond", "Jean-Philippe", "George"], ["Pierre Edouard", "Anas", "George"]]
        let callFunction = () => {
            validate(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param1 = [["George", "Edmond", "Michael"], ["Michael", "George", "Michael"], ["George", "Michael", "Michael"]]
        let callFunction = () => {
            validate(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param1 = [["Michael", "Jean-Philippe", "Pierre Edouard"], ["Jean-Philippe", "Anas", "Edmond"], ["Jean-Philippe", "Michael", "Jean-Philippe"]]
        let callFunction = () => {
            validate(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param1 = [["Pierre Edouard", "Anas", "Jean-Philippe"], ["Anas", "Jean-Philippe", "Michael"], ["Pierre Edouard", "Michael", "George"]]
        let callFunction = () => {
            validate(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            validate(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
