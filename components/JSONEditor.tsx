import { useRef } from "react"
import Editor, { Monaco, OnMount } from "@monaco-editor/react"

type IStandaloneCodeEditor = Parameters<OnMount>[0]

interface JSONEditorProps {
  modifyUploadedData: (code: string) => void
}

const JSONEditor = ({ modifyUploadedData }: JSONEditorProps) => {
  let editorRef = useRef<IStandaloneCodeEditor | null>(null)

  const handleEditorDidMount: OnMount = editor => {
    editorRef.current = editor
  }

  const runUserGeneratedCode = () => {
    const editorValue = editorRef.current?.getValue()
    editorValue && modifyUploadedData(editorValue)
  }

  return (
    <>
      <button onClick={runUserGeneratedCode}>Run</button>
      <Editor
        height="90vh"
        defaultLanguage="javascript"
        theme="vs-dark"
        onMount={handleEditorDidMount}
      />
    </>
  )
}

export default JSONEditor
