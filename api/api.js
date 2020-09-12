import useSWR from 'swr'

const urls = {
    listByLetter: (letter) => `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`,
    listBySearch: (word) => `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${word}`,
    listByIngredient: (ingredient) => `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`,
    cocktailById: (id) => `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
    allIngredients: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list'
}

const fetcher = (...args) => fetch(...args).then(res => res.json())

export function getListByLetter(letter) {
    const { data, error } = useSWR(urls.listByLetter(letter), fetcher)
    return {
        list: data ? data.drinks : null,
        isLoading: !error && !data,
        isError: error
    }
}

export function getListBySearch(word) {
    const { data, error } = useSWR(urls.listBySearch(word), fetcher)
    return {
        list: data ? data.drinks : null,
        isLoading: !error && !data,
        isError: error
    }
}

export function getListByIngredient(ingredient) {
    const { data, error } = useSWR(urls.listByIngredient(ingredient), fetcher)
    return {
        list: data ? data.drinks : null,
        isLoading: !error && !data,
        isError: error
    }
}

export function getCocktailById(id) {
    const { data, error } = useSWR(urls.cocktailById(id), fetcher)
    return {
        cocktail: data ? data.drinks[0] : null,
        isLoading: !error && !data,
        isError: error
    }
}

export function getIngredients() {
    const { data, error } = useSWR(urls.allIngredients, fetcher)
    return {
        ingredients: data ? data.drinks : null,
        isLoading: !error && !data,
        isError: error
    }
}