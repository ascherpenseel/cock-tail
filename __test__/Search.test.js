import { mount, shallow } from 'enzyme'
import Search from '../components/Search'
import * as nextRouter from 'next/router'
import * as utils from '../utils/utils'

describe("Search", () => {

    it("redirects to proper route on Enter", () => {
        const mockPush = jest.fn()
        nextRouter.useRouter = jest.fn().mockImplementation(() => ({ route: '/', push: mockPush }))

        const wrapper = mount(<Search mini={false} />)
        const input = wrapper.find('input[type="search"]')
        input.simulate('change', { target: { value: 'martini' } })
        input.simulate('keydown', {key: 'Enter'})

        expect(mockPush).toHaveBeenCalledTimes(1)
        expect(mockPush).toHaveBeenCalledWith('/search/martini')
    })

    it("redirects to proper route on mobile click", () => {
        const mockPush = jest.fn()
        nextRouter.useRouter = jest.fn().mockImplementation(() => ({ route: '/', push: mockPush }))
        utils.useResponsive = jest.fn().mockImplementation(() => true)

        const wrapper = mount(<Search mini={true} />)
        const input = wrapper.find('input[type="search"]')
        const button = wrapper.find('img')
        button.simulate('click')
        input.simulate('change', { target: { value: 'martini' } })
        button.simulate('click')
        
        expect(mockPush).toHaveBeenCalledTimes(1)
        expect(mockPush).toHaveBeenCalledWith('/search/martini')
    })

})