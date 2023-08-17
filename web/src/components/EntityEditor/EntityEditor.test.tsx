import { render } from '@redwoodjs/testing/web'

import { createEntity } from 'src/__mocks__/mockData'

import EntityEditor from './EntityEditor'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('EntityEditor', () => {
  it('renders successfully', () => {
    const entity = createEntity()
    const deselectEntity = jest.fn()
    const updateEntity = jest.fn()

    expect(() => {
      render(
        <EntityEditor
          entity={entity}
          deselectEntity={deselectEntity}
          updateEntity={updateEntity}
        />
      )
    }).not.toThrow()
  })

  it('renders the entity name', () => {
    const entity = createEntity({ name: 'Very unique name' })
    const deselectEntity = jest.fn()
    const updateEntity = jest.fn()

    const { getByText } = render(
      <EntityEditor
        entity={entity}
        deselectEntity={deselectEntity}
        updateEntity={updateEntity}
      />
    )

    expect(getByText(entity.name)).toBeInTheDocument()
  })

  it('calls deselectEntity when the close button is clicked', () => {
    const entity = createEntity()
    const deselectEntity = jest.fn()
    const updateEntity = jest.fn()

    const { getByTestId } = render(
      <EntityEditor
        entity={entity}
        deselectEntity={deselectEntity}
        updateEntity={updateEntity}
      />
    )

    getByTestId('entity-editor-close-button').click()

    // wait a bit
    setTimeout(() => {
      expect(deselectEntity).toHaveBeenCalled()
    }, 400)
  })
})
