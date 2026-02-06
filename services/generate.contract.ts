import { PromptStyle } from "@/logics/prompt"
import { PromptParams } from "@/logics/prompt/types"

export interface GenerateContract {
  request: GenerateRequest
  response: GeneratedArticle
}

export type GenerateRequest = PromptParams & {
  style: PromptStyle
}

export interface GeneratedArticle {
  title: string
  content: string
  hashtags: string[]
  metaDescription: string
}
