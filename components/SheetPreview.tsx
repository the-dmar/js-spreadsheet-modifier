import { UnknownJSON } from "../pages"

interface SheetPreviewProps {
  sheetData: { [key: string]: any }[]
}

const SheetPreview = ({ sheetData }: SheetPreviewProps) => {
  const cellValues = sheetData.map((row, rowIndex) =>
    row.flatMap((obj: object) => {
      if (rowIndex === 0) return Object.keys(obj)
      else return Object.values(obj)
    })
  )

  return <div>{cellValues.map(row => row.map(cell => <div>{cell}</div>))}</div>
}

export default SheetPreview
