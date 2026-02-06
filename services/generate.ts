import { apiClient } from "@/lib/axios"
import { GenerateContract } from "./generate.contract"

export const generateArticle = async (
  payload: GenerateContract["request"]
): Promise<GenerateContract["response"]> => {
  const response = await apiClient.post<GenerateContract["response"]>(
    "/generate",
    payload
  )
  return response.data
}
