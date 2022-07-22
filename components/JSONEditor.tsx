import { useRef } from "react"
import Editor, { Monaco, OnMount } from "@monaco-editor/react"
import { IStandaloneCodeEditor } from "../types/monaco"
import { FaPlay } from "react-icons/fa"
import { IconContext } from "react-icons"

interface JSONEditorProps {
  modifyUploadedData: (code: string) => void
}

const JSONEditor = ({ modifyUploadedData }: JSONEditorProps) => {
  let editorRef = useRef<IStandaloneCodeEditor | null>(null)

  const handleEditorDidMount: OnMount = (editor, monaco) => {
    editorRef.current = editor
  }

  const runUserGeneratedCode = () => {
    const editorValue = editorRef.current?.getValue()
    editorValue && modifyUploadedData(editorValue)
  }

  return (
    <>
      <IconContext.Provider value={{ size: 28 }}>
        <FaPlay onClick={runUserGeneratedCode} style={{ cursor: "pointer" }} />
      </IconContext.Provider>

      <Editor
        height="60vh"
        defaultLanguage="javascript"
        theme="my-theme"
        onMount={handleEditorDidMount}
      />
    </>
  )
}

export default JSONEditor
