import { render } from '@redwoodjs/testing/web'

import { createEntity } from 'src/__mocks__/mockData'

import EntityRenderer from './EntityRenderer'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('EntityRenderer', () => {
  it('renders successfully', () => {
    const entity = createEntity()

    expect(() => {
      render(<EntityRenderer entity={entity} />)
    }).not.toThrow()
  })

  it('renders an image if the entity has an image', () => {
    const entity = createEntity({ image: 'https://via.placeholder.com/150' })

    const { getByTestId } = render(<EntityRenderer entity={entity} />)

    expect(getByTestId('entity-image')).toBeInTheDocument()
  })

  it('renders HTML if the entity does not have an image', () => {
    const entity = createEntity({ image: null })

    const { getByTestId } = render(<EntityRenderer entity={entity} />)

    expect(getByTestId('entity-html')).toBeInTheDocument()
  })
})
