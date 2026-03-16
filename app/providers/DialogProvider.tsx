"use client"

import Dialog from "@/ds/components/molecules/dialog/Dialog"
import { useDialog } from "@/stores/dialog.store"

const DialogProvider = () => {
  const { dialogs, dismissDialog } = useDialog()

  return (
    <div>
      {dialogs
        .filter((dialog) => dialog.message)
        .map((dialog) => {
          const buttonsWithDismiss = dialog.buttons?.map((button) => ({
            ...button,
            onClick: () => {
              button.onClick?.()
              dismissDialog(dialog.id)
            },
          }))
          return (
            <div
              key={dialog.id}
              className="fixed inset-0 z-100"
              onClick={() => dismissDialog(dialog.id)}
            >
              <div onClick={(e) => e.stopPropagation()}></div>
              <Dialog
                message={dialog.message!}
                variant={dialog.variant!}
                buttons={buttonsWithDismiss}
              />
            </div>
          )
        })}
    </div>
  )
}

export default DialogProvider
