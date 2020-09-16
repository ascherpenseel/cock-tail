import { mount, shallow } from 'enzyme'
import Switch from '../components/Switch'
import { AppContextProvider, AppContext } from '../context/context'

describe("Switch", () => {
    
    it("toggles", () => {
        let nonAlcoholic = false
        const setNonAlcoholic = (f) => nonAlcoholic = f(nonAlcoholic)
        const wrapper = mount(<AppContext.Provider value={{nonAlcoholic, setNonAlcoholic}}><Switch /></AppContext.Provider>)
        const link = wrapper.find("[data-testid='link']")
        link.simulate('click')
        expect(nonAlcoholic).toBe(true)
    })

})