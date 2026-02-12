"use client"
import { useGeneratedArticle } from "@/stores/generatedArticle.store"
import { useRef } from "react"
import LoadingPage from "./loading"
import ErrorPage from "./error"
import EditorHeader from "./components/EditorHeader"
import ExportActions from "./components/ExportActions"
import ToastUIEditor from "./components/ToastUIEditor"
import { Editor as ToastEditorType } from "@toast-ui/react-editor"

const EditorPage = () => {
  const { isLoading, error } = useGeneratedArticle()
  const editorRef = useRef<ToastEditorType>(null)

  if (isLoading) return <LoadingPage />
  if (error) return <ErrorPage />

  return (
    <div className="space-y-4">
      <EditorHeader />
      <ToastUIEditor editorRef={editorRef} />
      <ExportActions editorRef={editorRef} />
    </div>
  )
}

export default EditorPage
