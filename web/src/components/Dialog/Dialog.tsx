import { useEffect, useState } from 'react'

import { FaCheck, FaTimes } from 'react-icons/fa'

import classNames from 'src/helpers/classNames'

export interface DialogProps {
  id: number
  title?: React.ReactNode
  body: React.ReactNode
  confirmButtonText?: React.ReactNode
  cancelButtonText?: React.ReactNode
  onConfirm?: () => unknown
  onCancel?: () => unknown
  loading?: boolean
  animationState?: 'entering' | 'entered' | 'exiting' | 'exited'
}

const Dialog = ({
  id,
  title,
  body,
  confirmButtonText,
  cancelButtonText,
  onConfirm,
  onCancel,
  animationState = 'entering',
}: DialogProps) => {
  const [loading, setLoading] = useState(false)
  const [dialogClasses, setDialogClasses] = useState('')

  const onClickConfirm = async () => {
    if (loading) return

    setLoading(true)
    try {
      await onConfirm()
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const onClickCancel = () => {
    if (loading) return

    if (!onCancel) return

    setLoading(true)
    try {
      onCancel()
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (animationState === 'entering') {
      setDialogClasses('opacity-0 -translate-y-4 scale-95')
      setTimeout(() => {
        setDialogClasses('opacity-100 translate-y-0 scale-100')
      }, 50)
    } else if (animationState === 'exiting') {
      setDialogClasses('opacity-0 -translate-y-4 scale-95')
    }
  }, [animationState])

  return (
    <div
      className={classNames(
        'flex w-96 flex-col gap-4 rounded bg-white p-4 shadow-lg transition duration-300',
        dialogClasses
      )}
    >
      <h1>{title}</h1>

      <p className="text-gray-500">{body}</p>

      <div className="flex flex-row items-center justify-end gap-2">
        {onClickConfirm && (
          <button
            className="rounded bg-blue-500 p-2 text-white"
            onClick={onClickConfirm}
          >
            {confirmButtonText || (
              <span className="flex flex-row items-center justify-center gap-2">
                <FaCheck />
                Confirm
              </span>
            )}
          </button>
        )}
        <button
          onClick={onClickCancel}
          className="rounded border p-2 text-blue-500"
        >
          {cancelButtonText || (
            <span className="flex flex-row items-center justify-center gap-2">
              <FaTimes />
              {confirmButtonText ? 'Cancel' : 'Close'}
            </span>
          )}
        </button>
      </div>
    </div>
  )
}

export default Dialog
