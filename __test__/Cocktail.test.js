import { mount, shallow } from 'enzyme'
import Cocktail from '../components/Cocktail'

const mocktail = {
    "idDrink": "1",
    "strDrink": "A1",
    "strCategory": "Cocktail",
    "strAlcoholic": "Alcoholic",
    "strGlass": "Cocktail glass",
    "strInstructions": "Pour all ingredients into a cocktail shaker, mix and serve over ice into a chilled glass.",
    "strDrinkThumb": "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/2x8thr1504816928.jpg",
    "strIngredient1": "Gin",
    "strIngredient2": "Grand Marnier",
    "strIngredient3": "Lemon Juice",
    "strIngredient4": "Grenadine",
    "strMeasure1": "1 3\/4 Shot",
    "strMeasure2": "1 Shot",
    "strMeasure3": "1\/4 Shot",
    "strMeasure4": "1\/8 Shot"
}

const props = {
    cocktail: mocktail,
    isLoading: false,
    isError: false
}
const props_error = {...props, isError: true}
const props_loading = {...props, isLoading: true}

describe("Cocktail", () => {
    
    it("renders without items", () => {
        
    })

    it("renders with error", () => {
        const wrapper = shallow(<Cocktail {...props_error} />)
        const message = wrapper.find("[data-testid='error']")
        expect(message.length).toBe(1)
        expect(wrapper.children().length).toBe(1)
    })

    it("renders loading", () => {
        const wrapper = shallow(<Cocktail {...props_loading} />)
        const message = wrapper.find("[data-testid='loading']")
        expect(message.length).toBe(1)
        expect(wrapper.children().length).toBe(1)
    })

    it("renders proper data", () => {
        const wrapper = shallow(<Cocktail {...props} />)
        const name = wrapper.find("[data-testid='name']")
        const category = wrapper.find("[data-testid='category']")
        const alcoholic = wrapper.find("[data-testid='alcoholic']")
        const glass = wrapper.find("[data-testid='glass']")
        const ingredients = wrapper.find("[data-testid='ingredients']")
        expect(name.text()).toBe('A1')
        expect(category.text()).toBe('Cocktail')
        expect(alcoholic.text()).toBe('Yes')
        expect(glass.text()).toBe('Cocktail glass')
        expect(ingredients.children().length).toBe(8)
        expect(ingredients.childAt(0).text()).toBe('Gin')
        expect(ingredients.childAt(1).text()).toBe('1 3\/4 Shot')
    })

})