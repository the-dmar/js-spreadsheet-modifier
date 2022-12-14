import { useEffect, useState } from "react"
import { Sheet, Row, Cell } from "../styles/SheetPreview.styled"

type SheetData = { [key: string]: any }[]
interface SheetPreviewProps {
  sheetData: SheetData
}

const SheetPreview = ({ sheetData }: SheetPreviewProps) => {
  const [resizedsheetData, setResizedSheetData] = useState<string[][]>()
  useEffect(() => {
    resizeSheet()
  }, [sheetData])

  const resizeSheet = () => {
    const cellValues = sheetData.map((row, rowIndex) =>
      row.flatMap((obj: object) => {
        if (rowIndex === 0) return Object.keys(obj)
        else {
          return Object.values(obj)
        }
      })
    )
    const requiredColumns = screen.width / 88 - 1
    const requiredRows = 9
    const currentRows = cellValues.length
    const currentColumns = cellValues[0].length
    const columnsToAdd =
      requiredColumns > currentColumns ? requiredColumns - currentColumns : null
    const rowsToAdd =
      requiredRows > currentRows ? requiredRows - currentRows : null

    let resizedSheet = [...cellValues]
    if (typeof rowsToAdd === "number") {
      resizedSheet = [
        ...resizedSheet,
        ...Array(Math.floor(rowsToAdd)).fill(
          Array(resizedSheet[0].length).fill("")
        ),
      ]
    }

    if (typeof columnsToAdd === "number") {
      resizedSheet = resizedSheet.map(row => {
        return [...row, ...Array(Math.floor(columnsToAdd)).fill("")]
      })
    }

    setResizedSheetData(resizedSheet)
  }

  return (
    <Sheet>
      {Array.isArray(resizedsheetData) &&
        resizedsheetData.map((row, rowIndex) => (
          <Row key={`${rowIndex}`}>
            {row.map((cell, columnIndex) => (
              <Cell key={`${rowIndex}${columnIndex}`}>
                {typeof cell === "string" ? cell : JSON.stringify(cell)}
              </Cell>
            ))}
          </Row>
        ))}
    </Sheet>
  )
}

export default SheetPreview
