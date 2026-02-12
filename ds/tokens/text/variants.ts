export type TextVariant = "h1" | "h2" | "h3" | "body" | "caption"

export const textVariantClass: Record<TextVariant, string> = {
  h1: "text-2xl font-medium",
  h2: "text-xl font-medium",
  h3: "text-lg font-medium",
  body: "text-base font-normal",
  caption: "text-sm font-normal text-muted-foreground",
}
