import { useRef, useState, useEffect } from "react"
import JSONEditor from "../components/JSONEditor"
import JSONPreview from "../components/JSONPreview"
import convertCsvToJson from "../utils/convertCsvToJson"
import * as xlsx from "xlsx"
import sample from "../data/sample"
import SheetPreview from "../components/SheetPreview"
import {
  Container,
  EditorWrapper,
  FileInputStyler,
  InvisibleFileInput,
  FileInputTypes,
  ButtonWrapper,
  IconWrapper,
  IconWrapperLabel,
} from "../styles/Index.styled"
import { FaUndo } from "react-icons/fa"
import DownloadButton from "../components/DownloadButton"
import { IconContext } from "react-icons"
import { FaPlay } from "react-icons/fa"

export type UnknownJSON = { [key: string]: any } | { [key: string]: any }[] | ""

const Home = () => {
  const [sheetData, setSheetData] = useState<UnknownJSON>(sample)
  const [previousSheetData, setPreviousSheetData] =
    useState<UnknownJSON>(sample)
  const [editorValue, setEditorValue] = useState<string | null>(null)

  useEffect(() => {
    console.log(editorValue)
  }, [editorValue])

  useEffect(() => {
    console.log(sheetData)
  }, [sheetData])

  const editorValueHandler = (newValue: string) => setEditorValue(newValue)

  const uploadHandler = async (files: FileList | null) => {
    const uploadedFile = files && files[0]

    const fileName = uploadedFile?.name

    if (fileName) {
      if (fileName.includes(".xlsx")) {
        const reader = new FileReader()
        reader.onload = e => {
          const rawData = e.target?.result
          if (rawData) {
            const wb = xlsx.readFile(rawData)
            const json = xlsx.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], {
              raw: false,
            })
            setSheetData(json)
          }
        }

        reader.readAsArrayBuffer(uploadedFile)
      } else {
        const reader = new FileReader()
        reader.readAsText(uploadedFile)
        reader.onload = () => {
          const loadedFile = reader.result
          typeof loadedFile === "string" &&
            setSheetData(convertCsvToJson(loadedFile))
        }
      }
    }
  }

  const runUserGeneratedCode = () => {
    if (editorValue) {
      const dataModifierFunctionBody = `
        const data = ${JSON.stringify(sheetData)}
        ${editorValue}`

      const dataModifierFunction = new Function(dataModifierFunctionBody)
      const newData = dataModifierFunction()
      setPreviousSheetData(sheetData)
      setSheetData(newData)
    }
  }

  const undoLastChange = () => setSheetData(previousSheetData)

  return (
    <Container>
      <ButtonWrapper>
        <InvisibleFileInput
          type="file"
          id="file"
          onChange={e => uploadHandler(e.target.files)}
        />

        <FileInputStyler htmlFor="file">Upload File</FileInputStyler>
        <IconWrapper onClick={runUserGeneratedCode}>
          <IconContext.Provider value={{ size: 17, color: "white" }}>
            <FaPlay />
          </IconContext.Provider>
          <IconWrapperLabel>Run</IconWrapperLabel>
        </IconWrapper>
        <IconWrapper onClick={undoLastChange}>
          <IconContext.Provider value={{ size: 16, color: "white" }}>
            <FaUndo />
          </IconContext.Provider>
          <IconWrapperLabel>Undo</IconWrapperLabel>
        </IconWrapper>
        <DownloadButton sheetData={sheetData} label="Download" />
      </ButtonWrapper>
      <EditorWrapper>
        <JSONEditor editorValueHandler={editorValueHandler} />
        <JSONPreview json={JSON.stringify(sheetData, null, 2)} />
      </EditorWrapper>
      {/* <SheetPreview
        sheetData={Array.isArray(sheetData) ? sheetData : [sheetData]}
      /> */}
    </Container>
  )
}

export default Home
