import { useRef } from "react"
import Editor, { OnMount } from "@monaco-editor/react"
import { IStandaloneCodeEditor } from "../types/monaco"

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
        height="60vh"
        defaultLanguage="javascript"
        theme="vs-dark"
        onMount={handleEditorDidMount}
      />
    </>
  )
}

export default JSONEditor
