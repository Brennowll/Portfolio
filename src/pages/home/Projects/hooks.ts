import { useState } from "react"

export function useShowDialog() {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false)

  const toggleDialog = () => {
    setDialogOpen(!dialogOpen)
  }

  return { dialogOpen, toggleDialog }
}
