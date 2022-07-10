import Editor from "@monaco-editor/react"

const JSONPreview = ({ json }: any) => {
  const body = json || ""
  return (
    <Editor height="90vh" defaultLanguage="json" theme="vs-dark" value={json} />
  )
}

export default JSONPreview
