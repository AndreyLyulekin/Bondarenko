"use client"

import { useState } from "react"
import ThemePortal from "./ThemePortal"

export default function ThemeButton() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          padding: "12px 18px",
          borderRadius: 12,
          border: "none",
          background: "var(--accent)",
          color: "var(--accentText)",
          cursor: "pointer",
          boxShadow: "var(--shadow)"
        }}
      >
        Theme
      </button>

      {open && <ThemePortal onClose={() => setOpen(!open)} />}
    </>
  )
}