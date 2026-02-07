import { GenerateActionsProps } from "../types"

const GenerateActions = ({ onMutation }: GenerateActionsProps) => {
  const handleGenerate = async () => {
    const article = await onMutation()
    console.log(article)
  }

  return (
    <>
      <button onClick={handleGenerate}>생성하기</button>
    </>
  )
}

export default GenerateActions
