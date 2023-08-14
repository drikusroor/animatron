import useEntitiesStore from 'src/store/entities'
import useSelectionStore from 'src/store/selection'

import EntityList from '../EntityList/EntityList'

const EntityListContainer = () => {
  const select = useSelectionStore((state) => state.select)
  const selected = useSelectionStore((state) => state.selection)

  const entities = useEntitiesStore((state) => state.entities)

  return <EntityList entities={entities} select={select} selected={selected} />
}

export default EntityListContainer
