import { mount, shallow } from 'enzyme'
import Keyboard from '../components/Keyboard'

describe("Keyboard", () => {
    
    it("renders all alphabet (26)", () => {
        const wrapper = shallow(<Keyboard />)
        const letters = wrapper.find('Letter')
        const alphabet = 'abcdefghijklmnopqrstuvwxyz'
        let renderedAlphabet = []
        letters.forEach(letter => {
            renderedAlphabet.push(letter.props().char)
        })
        expect(renderedAlphabet.sort().join('')).toBe(alphabet)
    })

    it("selects only one letter", () => {
        const wrapper = shallow(<Keyboard letter='x'/>)
        wrapper.find('Letter').forEach(node => {
            expect(node.props()['selected']).toBe('x')
        })
    })

    it("links all routes", () => {
        const wrapper = shallow(<Keyboard letter='x'/>)
        wrapper.find('Letter').forEach(node => {
            expect(node.shallow().props().href).toBe(`/list/${node.props().char}`)
        })
    })

})