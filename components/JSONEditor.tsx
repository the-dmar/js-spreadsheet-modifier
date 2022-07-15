import { MutableRefObject, useRef } from "react"
import Editor, { Monaco, OnMount } from "@monaco-editor/react"

const JSONEditor = () => {
  let editorRef = useRef<Monaco|null>(null)

  const handleEditorDidMount: OnMount = (editor, monaco) => {
    editorRef && editorRef?.current = editor
  }

  return (
    <Editor
      height="90vh"
      defaultLanguage="json"
      theme="vs-dark"
      onMount={handleEditorDidMount}
    />
  )
}

export default JSONEditor
