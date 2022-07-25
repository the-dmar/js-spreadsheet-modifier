import { useRef } from "react"
import Editor, { Monaco, OnMount } from "@monaco-editor/react"
import { IStandaloneCodeEditor } from "../types/monaco"

interface JSONEditorProps {
  editorValueHandler: (newValue: string) => void
}

const JSONEditor = ({ editorValueHandler }: JSONEditorProps) => {
  let editorRef = useRef<IStandaloneCodeEditor | null>(null)

  const handleEditorDidMount: OnMount = (editor, monaco) => {
    editorRef.current = editor
  }

  const saveEditorValue = () => {
    const editorValue = editorRef.current?.getValue()
    editorValue && editorValueHandler(editorValue)
  }

  return (
    <>
      <Editor
        height="60vh"
        defaultLanguage="javascript"
        theme="my-theme"
        onMount={handleEditorDidMount}
        onChange={saveEditorValue}
      />
    </>
  )
}

export default JSONEditor
