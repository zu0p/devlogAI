import { PromptStyle } from "@/logics/prompt"
import { GenerateInputsProps } from "../types"

const GenerateInputs = ({ value, onChange }: GenerateInputsProps) => {
  return (
    <div className="flex flex-col">
      <div>
        <label htmlFor="title">
          title:
          <input
            id="title"
            value={value.title}
            onChange={(e) => {
              onChange("title", e.target.value)
            }}
          />
        </label>
      </div>

      <div>
        <label htmlFor="keywords">
          keywords:
          <input
            id="keywords"
            value={value.keywords}
            onChange={(e) => {
              onChange("keywords", [e.target.value])
            }}
          />
        </label>
      </div>
      <select
        value={value.style}
        onChange={(e) => onChange("style", e.target.value as PromptStyle)}
      >
        <option value="tutorial">tutorial</option>
        <option value="til">TIL</option>
        <option value="troubleshooting">troubleshooting</option>
      </select>
    </div>
  )
}

export default GenerateInputs
