import { mount, shallow } from 'enzyme'
import Filters from '../components/Filters'
import * as api from '../api/api'

const mockIngredients = {
    ingredients: [],
    isLoading: false,
    isError: false
}

describe("Filters", () => {
    
    it("renders without items", () => {
        api.getIngredients = jest.fn(() => mockIngredients)

        const wrapper = shallow(<Filters noAlcoholicFilter={false} />)
        const alcoholicFilter = wrapper.find("[data-testid='switch']")
        const list = wrapper.find("[data-testid='list']")
        
        expect(alcoholicFilter.length).toBe(1)
        expect(list.children().length).toBe(0)
    })

    it("renders with error", () => {
        api.getIngredients = jest.fn(() => ({...mockIngredients, isError:true}))
        
        const wrapper = shallow(<Filters noAlcoholicFilter={false} />)
        const error = wrapper.find("[data-testid='error']")
        
        expect(error.exists()).toBe(true)
        expect(wrapper.children().length).toBe(1)
    })

    it("renders loading", () => {
        api.getIngredients = jest.fn(() => ({...mockIngredients, isLoading:true}))
        
        const wrapper = shallow(<Filters noAlcoholicFilter={false} />)
        const loading = wrapper.find("[data-testid='loading']")
        
        expect(loading.exists()).toBe(true)
        expect(wrapper.children().length).toBe(1)
    })

    it("renders 2 items", () => {
        api.getIngredients = jest.fn(() => ({...mockIngredients, ingredients:[{strIngredient1: 'Gin'},{strIngredient1: 'Lemon'}]}))

        const wrapper = shallow(<Filters noAlcoholicFilter={false} />)
        const alcoholicFilter = wrapper.find("[data-testid='switch']")
        const list = wrapper.find("[data-testid='list']")
        
        expect(alcoholicFilter.length).toBe(1)
        expect(list.children().length).toBe(2)
    })

    it("hides AlcoholicFilter", () => {
        api.getIngredients = jest.fn(() => mockIngredients)

        const wrapper = shallow(<Filters noAlcoholicFilter={true} />)
        const alcoholicFilter = wrapper.find("[data-testid='switch']")
        
        expect(alcoholicFilter.exists()).toBe(false)
    })

})