import { mount, shallow } from 'enzyme'
import ListItem from '../components/ListItem'

const mocktail = {
    "idDrink": "17222",
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
    "strMeasure1": "1 3\/4 shot ",
    "strMeasure2": "1 Shot ",
    "strMeasure3": "1\/4 Shot",
    "strMeasure4": "1\/8 Shot"
}

describe("ListItem", () => {
    
    it("accepts cocktail info", () => {
        const wrapper = mount(<ListItem cocktail={mocktail} />)
        expect(wrapper.props().cocktail).toEqual(mocktail)
    })

    it("shows cocktail name", () => {
        const wrapper = shallow(<ListItem cocktail={mocktail} />)
        const shown = wrapper.find("p[data-testid='name']").text()
        expect(shown).toEqual("A1")
    })

    it("shows ingredients", () => {
        const wrapper = shallow(<ListItem cocktail={mocktail} />)
        const shown = wrapper.find("p[data-testid='ingredients']").text()
        expect(shown).toEqual("Gin, Grand Marnier, Lemon Juice, Grenadine")
    })

    it("loads image", () => {
        const wrapper = mount(<ListItem cocktail={mocktail} />)
        const url = wrapper.find("img").prop("src")
        expect(url).toEqual("https:\/\/www.thecocktaildb.com\/images\/media\/drink\/2x8thr1504816928.jpg/preview")
    })
})