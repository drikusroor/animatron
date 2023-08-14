import { ISelection } from 'src/store/selection'
import { IEntity } from 'src/types/entity.interface'

interface IEntityListProps {
  entities: IEntity[]
  selected: ISelection
  select: (selection: ISelection) => void
}

const EntityList = (props: IEntityListProps) => {
  const { entities, selected, select } = props

  const isSelected = (index: number) => {
    return selected?.index === index && selected.type === 'entity'
  }

  const onKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      event.stopPropagation()
      select({ type: 'entity', index })
    }

    if (event.key === 'Home' || event.key === 'Escape') {
      event.preventDefault()
      event.stopPropagation()
      select(null)
    }
  }

  return (
    <ul className="mt-3">
      {entities.map((entity: IEntity, index) => {
        return (
          <li key={index}>
            <button
              data-testid="entity-list-item-button"
              className={`mt-2 block w-full cursor-pointer rounded-lg px-2 py-2 text-left transition-colors hover:bg-gray-700
                ${isSelected(index) ? 'bg-gray-700 font-bold' : ''}`}
              onClick={() => select({ type: 'entity', index })}
              onKeyDown={(e) => onKeyDown(e, index)}
              role="option"
              aria-selected={isSelected(index)}
              aria-label={`Select ${entity.name} from list`}
              tabIndex={0}
            >
              {entity.name}
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default EntityList
