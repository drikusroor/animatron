import { useBoundStore } from 'src/store'

import AddNewEntityButton from '../AddNewEntityButton/AddNewEntityButton'

const AddNewEntityContainer = () => {
  const currentAnimation = useBoundStore((state) => state.animation)
  const addEntity = useBoundStore((state) => state.addEntity)

  const onClick = () => {
    const newEntity = {
      revisionId: currentAnimation.id,
      name: 'New Entity',
      html: `<div></div>`,
      css: `
      {
        width: 64px;
        height: 64px;
        background: #f00;
      }`,
      image: '',
    }

    addEntity(newEntity)
  }

  return <AddNewEntityButton onClick={onClick} />
}

export default AddNewEntityContainer
