import { render } from '@redwoodjs/testing/web'

import { createEntity } from 'src/__mocks__/mockData'
import { ISelection } from 'src/store/selection'

import EntityList from './EntityList'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('EntityList', () => {
  let selectSpy

  beforeEach(() => {
    selectSpy = jest.fn()
  })

  it('renders successfully', () => {
    const entities = [createEntity({ id: 42 }), createEntity({ id: 43 })]

    expect(() => {
      render(
        <EntityList entities={entities} select={selectSpy} selected={null} />
      )
    }).not.toThrow()
  })

  it('renders a list of entities', () => {
    const entities = [createEntity({ id: 42 }), createEntity({ id: 43 })]

    const { getAllByTestId } = render(
      <EntityList entities={entities} select={selectSpy} selected={null} />
    )

    expect(getAllByTestId('entity-list-item-button').length).toEqual(2)
  })

  it('renders a list of entities with the selected entity highlighted', () => {
    const selected: ISelection = { path: [0], type: 'entity' }
    const entities = [createEntity({ id: 42 }), createEntity({ id: 43 })]

    const { getAllByTestId } = render(
      <EntityList entities={entities} select={selectSpy} selected={selected} />
    )

    const entityButtons = getAllByTestId('entity-list-item-button')
    expect(entityButtons.length).toEqual(2)
    expect(entityButtons[0].className).toContain('bg-gray-700 font-bold')
    expect(entityButtons[1].className).not.toContain('bg-gray-700 font-bold')
    expect(entityButtons[0]).toHaveAttribute('aria-selected', 'true')
    expect(entityButtons[1]).toHaveAttribute('aria-selected', 'false')
  })

  it('calls the select callback function when an entity is clicked', () => {
    const entities = [createEntity({ id: 42 }), createEntity({ id: 43 })]

    const { getAllByTestId } = render(
      <EntityList entities={entities} select={selectSpy} selected={null} />
    )

    getAllByTestId('entity-list-item-button')[0].click()

    expect(selectSpy).toHaveBeenCalledWith({ path: [0], type: 'entity' })
  })
})
