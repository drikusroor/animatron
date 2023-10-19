/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useEffect, useState } from 'react'

import classNames from 'src/helpers/classNames'
import { useBoundStore } from 'src/store'

import Dialog from '../Dialog/Dialog'

interface DialogStackProviderProps {
  children: React.ReactNode
}

const DialogStackProvider = ({ children }: DialogStackProviderProps) => {
  const dialogs = useBoundStore((state) => state.dialogStack)
  const removeDialog = useBoundStore((state) => state.removeDialog)

  const [backdropClasses, setBackdropClasses] = useState('hidden')
  const [previousDialogs, setPreviousDialogs] = useState([])

  useEffect(() => {
    if (dialogs.length === previousDialogs.length) return

    if (dialogs.length > 0 && previousDialogs.length === 0) {
      setBackdropClasses('bg-opacity-0')
      setTimeout(() => {
        setBackdropClasses('bg-opacity-50')
      }, 50)
    } else if (dialogs.length === 0 && previousDialogs.length > 0) {
      setBackdropClasses('bg-opacity-0 user-select-none pointer-events-none')
      setTimeout(() => {
        setBackdropClasses('hidden')
      }, 300)
    }

    setPreviousDialogs(dialogs)
  }, [dialogs, previousDialogs])

  const onClickBackdrop = () => {
    const dialog = dialogs[dialogs.length - 1]

    if (!dialog) return

    if (!dialog.onCancel) return removeDialog(dialog)

    dialog.onCancel()
  }

  return (
    <>
      {children}
      <div
        className={classNames(
          'fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transition duration-300',
          backdropClasses
        )}
        onClick={onClickBackdrop}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        onKeyDown={(event) => {
          if (event.key === 'Escape') onClickBackdrop()
        }}
      >
        {dialogs.map((dialog) => (
          <Dialog key={dialog.id} {...dialog} />
        ))}
      </div>
    </>
  )
}

export default DialogStackProvider
