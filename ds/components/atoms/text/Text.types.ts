import { TextVariant } from "@/ds/tokens/text/variants"
import { ElementType } from "react"

export type TextProps<T extends ElementType = "span"> = {
  as?: T
  variant?: TextVariant
  className?: string
  children: React.ReactNode
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "className" | "children">
