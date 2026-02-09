import { GenerateActionsProps } from "../types"

const GenerateActions = ({ onMutation }: GenerateActionsProps) => {
  return (
    <>
      <button onClick={onMutation}>생성하기</button>
    </>
  )
}

export default GenerateActions
