export type ExportFormat = "markdown" | "html"

export const exportDocuments = (
  format: ExportFormat,
  content: string,
  fileName?: string
) => {
  const extension = format === "markdown" ? "md" : "html"
  const mimeType = format === "markdown" ? "text/markdown" : "text/html"

  const finalName = fileName ?? `article.${extension}`

  const blob = new Blob([content], { type: mimeType })
  const url = URL.createObjectURL(blob)

  const link = document?.createElement("a")
  link.href = url
  link.download = finalName
  link.click()

  URL.revokeObjectURL(url)
  link.remove()
}
