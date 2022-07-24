import { useState } from "react"
import { CellContents, CellLocation } from "../styles/Cell.styled"

interface CellProps {
  rowI: number
  columnI: number
  cell: string
}

const Cell = ({ rowI, columnI, cell }: CellProps) => {
  const [showLocation, setShowLocation] = useState(false)
  return showLocation ? <CellLocation /> : <CellContents />
}

export default Cell
