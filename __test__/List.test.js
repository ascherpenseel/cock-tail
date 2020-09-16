import { mount, shallow } from 'enzyme'
import List from '../components/List'
import { AppContextProvider, AppContext } from '../context/context'

const mocktail1 = {
    "idDrink": "1",
    "strDrink": "Margarita",
    "strAlcoholic": "Alcoholic"
}, mocktail2 = {
    "idDrink": "2",
    "strDrink": "Aviation",
    "strAlcoholic": "Alcoholic"
}, mocktail3 = {
    "idDrink": "3",
    "strDrink": "Lemonade",
    "strAlcoholic": "Non alcoholic"
}

const mock_list = [mocktail1, mocktail2, mocktail3]

const props_empty = {
    list: [],
    isLoading: false,
    isError: false, 
    noAlcoholicFilter: false
}
const props_error = {...props_empty, isError: true}
const props_loading = {...props_empty, isLoading: true}
const props = {...props_empty, list: mock_list}

describe("List", () => {
    
    it("renders without items", () => {
        let wrapper = mount(<AppContextProvider><List {...props_empty} /></AppContextProvider>)
        let message = wrapper.find("[data-testid='no-results']")
        expect(message.length).toBe(1)
        expect(wrapper.children().length).toBe(1)

        props_empty.list = null
        wrapper = mount(<AppContextProvider><List {...props_empty} /></AppContextProvider>)
        message = wrapper.find("[data-testid='no-results']")
        expect(message.length).toBe(1)
        expect(wrapper.children().length).toBe(1)
    })

    it("renders with error", () => {
        const wrapper = mount(<AppContextProvider><List {...props_error} /></AppContextProvider>)
        const message = wrapper.find("[data-testid='error']")
        expect(message.length).toBe(1)
        expect(wrapper.children().length).toBe(1)
    })

    it("renders loading", () => {
        const wrapper = mount(<AppContextProvider><List {...props_loading} /></AppContextProvider>)
        const message = wrapper.find("[data-testid='loading']")
        expect(message.length).toBe(1)
        expect(wrapper.children().length).toBe(1)
    })

    it("renders 2 items", () => {
        const wrapper = mount(<AppContextProvider><List {...props} /></AppContextProvider>)
        const container = wrapper.find("[data-testid='container']")
        expect(container.children().length).toBe(3)
    })

    it("filters alcoholic drinks", () => {
        const wrapper = mount(<AppContext.Provider value={{nonAlcoholic: true, setNonAlcoholic: null}}><List {...props} /></AppContext.Provider>)
        const container = wrapper.find("[data-testid='container']")
        expect(container.children().length).toBe(1)
    })

    it("orders the list", () => {
        const wrapper = mount(<AppContextProvider><List {...props} /></AppContextProvider>)
        const container = wrapper.find("[data-testid='container']")
        expect(container.childAt(0).props()['data-testid']).toBe("Aviation")
        expect(container.childAt(2).props()['data-testid']).toBe("Margarita")
    })

})