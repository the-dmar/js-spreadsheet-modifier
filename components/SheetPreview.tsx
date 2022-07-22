import { Sheet, Row, Cell } from "../styles/SheetPreview.styled"

interface SheetPreviewProps {
  sheetData: { [key: string]: any }[]
}

const SheetPreview = ({ sheetData }: SheetPreviewProps) => {
  const cellValues = sheetData.map((row, rowIndex) =>
    row.flatMap((obj: object) => {
      if (rowIndex === 0) return Object.keys(obj)
      else {
        return Object.values(obj)
      }
    })
  )

  return (
    <Sheet>
      {cellValues.map(row => (
        <Row key={`row${row}`}>
          {row.map((cell, i) => (
            <Cell key={`${row}${i}`}>{cell}</Cell>
          ))}
        </Row>
      ))}
    </Sheet>
  )
}

export default SheetPreview
