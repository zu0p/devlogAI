"use client"
import GenerateActions from "@/app/generate/components/GenerateActions"
import GenerateInputs from "@/app/generate/components/GenerateInputs"
import { useEffect, useState } from "react"
import { GenerateInputsState, GenerateInputsProps } from "./types"
import { useGenerate } from "@/hooks/generate/useGenerate"
import GenerateResult from "./components/GenerateResult"

const GeneratePage = () => {
  const [inputs, setInputs] = useState<GenerateInputsState>({
    title: "",
    keywords: [],
    style: "tutorial",
  })
  const [articleDraft, setArticleDraft] = useState<string>("")

  const generateMutation = useGenerate()

  useEffect(() => {
    if (!generateMutation.data) return

    const { title, content } = generateMutation.data
    setArticleDraft(`${title}\n\n${content}`)
  }, [generateMutation.data])

  const handleChange: GenerateInputsProps["onChange"] = <
    K extends keyof GenerateInputsState,
  >(
    key: K,
    value: GenerateInputsState[K]
  ) => {
    setInputs((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mt-8 mb-8 text-center">
        <h2 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
          기술 블로그 글 생성기
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          주제와 키워드를 입력하면 AI가 블로그 글을 작성해드립니다
        </p>
      </div>

      <div className="space-y-6">
        <GenerateInputs value={inputs} onChange={handleChange} />
        <GenerateActions
          disabled={inputs.title.length > 0 ? false : true}
          onMutation={() => generateMutation.mutateAsync(inputs)}
        />

        {generateMutation?.data && (
          <GenerateResult value={articleDraft} onChange={setArticleDraft} />
        )}
      </div>
    </div>
  )
}

export default GeneratePage
