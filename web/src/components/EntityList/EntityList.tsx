import { ISelection } from 'src/store/selection'
import { IEntity } from 'src/types/entity.interface'

import EntityRenderer from '../EntityRenderer/EntityRenderer'

interface IEntityListProps {
  entities: IEntity[]
  selected: ISelection
  select: (selection: ISelection) => void
}

const EntityList = (props: IEntityListProps) => {
  const { entities, selected, select } = props

  const isSelected = (index: number) => {
    return selected?.path[0] === index && selected.type === 'entity'
  }

  const onKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      event.stopPropagation()
      select({ type: 'entity', path: [index] })
    }
  }

  return (
    <ul>
      {!entities ||
        (entities.length === 0 && (
          <span className="text-gray-400">No entities</span>
        ))}
      {entities.map((entity: IEntity, index) => {
        return (
          <li key={index}>
            <button
              data-testid="entity-list-item-button"
              className={`relative mt-2 block w-full cursor-pointer rounded-lg px-2 py-2 pr-8 text-left transition-colors hover:bg-gray-700
                ${isSelected(index) ? 'bg-gray-700 font-bold' : ''}`}
              onClick={() => select({ type: 'entity', path: [index] })}
              onKeyDown={(e) => onKeyDown(e, index)}
              role="option"
              aria-selected={isSelected(index)}
              aria-label={`Select ${entity.name} from list`}
              tabIndex={0}
            >
              {entity.name}

              <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                <EntityRenderer entity={entity} maxHeight={32} maxWidth={32} />
              </div>
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default EntityList
