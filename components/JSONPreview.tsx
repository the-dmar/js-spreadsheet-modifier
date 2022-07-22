import { useRef } from "react"
import Editor, { OnMount } from "@monaco-editor/react"
import { IStandaloneCodeEditor } from "../types/monaco"

const JSONPreview = ({ json }: any) => {
  const previewEditorRef = useRef<IStandaloneCodeEditor | null>(null)

  const handlePreviewEditorDidMount: OnMount = editor => {
    previewEditorRef.current = editor
  }

  const copyJson = () => {
    const clipboardText = previewEditorRef.current?.getValue()
    clipboardText && navigator.clipboard.writeText(clipboardText)
  }

  return (
    <>
      <Editor
        height="60vh"
        width="30vw"
        defaultLanguage="json"
        theme="vs-dark"
        value={json}
        onMount={handlePreviewEditorDidMount}
      />
    </>
  )
}

export default JSONPreview
