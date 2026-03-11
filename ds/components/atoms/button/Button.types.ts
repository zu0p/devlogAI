import { buttonSize } from "@/ds/tokens/button/sizes"
import { ButtonVariant } from "@/ds/tokens/button/variants"
import React from "react"

export type ButtonProps = {
  variant?: ButtonVariant
  size?: buttonSize
  isFull?: boolean
} & React.ComponentProps<"button">
