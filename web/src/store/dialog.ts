import { StateCreator } from 'zustand'

import { DialogProps } from 'src/components/Dialog/Dialog'

import { IRootState } from '.'

export interface DialogStackItem extends DialogProps {}

export type CreateDialogInput = Omit<DialogProps, 'id'>

export interface IDialogsState {
  dialogStack: DialogStackItem[]
  addDialog: (dialog: CreateDialogInput) => void
  removeDialog: (dialog: DialogStackItem) => void
  setDialogStack: (dialogs: DialogStackItem[]) => void
}

const createDialogsSlice: StateCreator<IRootState, [], [], IDialogsState> = (
  set,
  _x,
  _y
) => ({
  dialogStack: [],
  addDialog: (createDialogInput) =>
    set(({ dialogStack }) => {
      const maxId = dialogStack.reduce((acc, curr) => Math.max(acc, curr.id), 0)

      const dialog = {
        ...createDialogInput,
        id: maxId + 1,
      }

      return {
        dialogStack: [...dialogStack, dialog],
      }
    }),
  removeDialog: (dialog) => {
    // Animate the dialog out
    set(({ dialogStack }) => ({
      dialogStack: [
        ...dialogStack.map((d) => {
          if (d.id === dialog.id) {
            d.animationState = 'exiting'
          }

          return d
        }),
      ],
    }))

    // Remove the dialog from the stack after the animation has completed
    setTimeout(() => {
      set(({ dialogStack }) => ({
        dialogStack: [...dialogStack.filter((d) => d.id !== dialog.id)],
      }))
    }, 300)
  },
  setDialogStack: (dialogStack) =>
    set(() => ({
      dialogStack,
    })),
})

export default createDialogsSlice
