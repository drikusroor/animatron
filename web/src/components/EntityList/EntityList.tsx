import { ISelection } from 'src/store/selection'
import { IEntity } from 'src/types/entity.interface'

interface IEntityListProps {
  entities: IEntity[]
  selected: ISelection
  select: (selection: ISelection) => void
}

const EntityList = (props: IEntityListProps) => {
  const { entities, selected, select } = props

  const isSelected = (id: number) => {
    return selected?.id === id && selected.type === 'entity'
  }

  return (
    <ul className="mt-3">
      {entities.map((entity: IEntity, index) => {
        return (
          <li key={index}>
            <button
              className={`mt-2 block w-full cursor-pointer rounded-lg px-2 py-2 text-left transition-colors hover:bg-gray-700
                ${isSelected(entity.id) ? 'bg-gray-700 font-bold' : ''}`}
              onClick={() => select({ type: 'entity', id: entity.id })}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  select({ type: 'entity', id: entity.id })
                }
              }}
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
