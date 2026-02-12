import { cn } from "@/lib/utils"
import { ButtonProps } from "./Button.types"
import { buttonSizeClass } from "@/ds/tokens/button/sizes"
import { buttonVariantClass } from "@/ds/tokens/button/variants"

const Button = ({
  className,
  variant = "default",
  size = "default",
  children,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        buttonSizeClass[size],
        buttonVariantClass[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
