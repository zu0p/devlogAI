import { DialogVariant } from "@/ds/tokens/dialog/variants"

type Button = {
  text: string
  onClick: () => void
}

export interface DialogProps {
  message: string
  variant: DialogVariant
  buttons?: Button[]
}
