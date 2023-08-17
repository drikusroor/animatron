import { useBoundStore } from 'src/store'

import EntityList from '../EntityList/EntityList'

const EntityListContainer = () => {
  const select = useBoundStore((state) => state.select)
  const selected = useBoundStore((state) => state.selection)

  const entities = useBoundStore((state) => state.entities)

  return <EntityList entities={entities} select={select} selected={selected} />
}

export default EntityListContainer
