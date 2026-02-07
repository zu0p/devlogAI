import { GenerateResultProps } from "../types"

const GenerateResult = ({ data }: GenerateResultProps) => {
  return (
    <div>
      <textarea
        style={{
          width: "100%",
          height: "400px",
        }}
        value={`${data.title} \n ${data.content}`}
      />
    </div>
  )
}

export default GenerateResult
