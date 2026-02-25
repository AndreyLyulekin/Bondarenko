"use client"

import { useEffect, useState } from "react"

const variables = [
  "--bg",
  "--surface",
  "--card",
  "--text",
  "--accent",
  "--accentText"
]

export default function ThemeEditor() {
  const [theme, setTheme] = useState<Record<string, string>>({})

  useEffect(() => {
    const saved = localStorage.getItem("custom-theme")
    if (saved) {
      const parsed = JSON.parse(saved)
      applyTheme(parsed)
      setTheme(parsed)
    } else {
      const current: Record<string, string> = {}
      variables.forEach(v => {
        current[v] = getComputedStyle(document.documentElement).getPropertyValue(v).trim()
      })
      setTheme(current)
    }
  }, [])

  const applyTheme = (values: Record<string, string>) => {
    Object.entries(values).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value)
    })
  }

  const handleChange = (key: string, value: string) => {
    const updated = { ...theme, [key]: value }
    setTheme(updated)
    applyTheme(updated)
    localStorage.setItem("custom-theme", JSON.stringify(updated))
  }

  const resetTheme = () => {
    variables.forEach(v =>
      document.documentElement.style.removeProperty(v)
    )
    localStorage.removeItem("custom-theme")
  }

  return (
    <div>
      <h2 style={{ marginBottom: 20 }}>Настройка темы</h2>

      {variables.map(variable => (
        <div key={variable} style={{ marginBottom: 15 }}>
          <label style={{ display: "block", marginBottom: 6 }}>
            {variable}
          </label>

          <input
            type="color"
            value={theme[variable] || "#ffffff"}
            onChange={e => handleChange(variable, e.target.value)}
            style={{ width: "100%", height: 40, border: "none" }}
          />
        </div>
      ))}

      <button
        onClick={resetTheme}
        style={{
          marginTop: 20,
          width: "100%",
          padding: 10,
          borderRadius: 10,
          border: "1px solid #ddd",
          cursor: "pointer"
        }}
      >
        Сбросить тему
      </button>
    </div>
  )
}