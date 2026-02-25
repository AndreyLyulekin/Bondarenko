"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import ThemeEditor from "./ThemeEditor"

export default function ThemePortal({ onClose }: { onClose: () => void }) {
  const [mounted, setMounted] = useState(false)
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null)

  useEffect(() => {
    setMounted(true)

    let root = document.getElementById("theme-portal-root")

    if (!root) {
      root = document.createElement("div")
      root.id = "theme-portal-root"
      document.body.appendChild(root)
    }

    setPortalRoot(root)

    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  if (!mounted || !portalRoot) return null

  return createPortal(
    <div style={overlayStyle} onClick={onClose}>
      <div
        style={modalStyle}
        onClick={(e) => e.stopPropagation()}
      >
        <ThemeEditor />
        <button onClick={onClose} style={closeStyle}>
          ✕
        </button>
      </div>
    </div>,
    portalRoot
  )
}

const overlayStyle: React.CSSProperties = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 10000
}

const modalStyle: React.CSSProperties = {
  background: "#fff",
  padding: 30,
  borderRadius: 16,
  width: 420,
  maxHeight: "80vh",
  overflowY: "auto",
  position: "relative"
}

const closeStyle: React.CSSProperties = {
  position: "absolute",
  top: 10,
  right: 10,
  background: "none",
  border: "none",
  fontSize: 18,
  cursor: "pointer"
}