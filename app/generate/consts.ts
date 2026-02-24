import { PromptStyle } from "@/logics/prompt"

export const POST_TYPES: { type: PromptStyle; label: string }[] = [
  { type: "tutorial", label: "Tutorial" },
  { type: "til", label: "TIL" },
  {
    type: "troubleshooting",
    label: "Troubleshooting",
  },
]
