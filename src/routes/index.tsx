import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/')({ component: App })

const STORAGE_KEY = 'daily-focus-text'

function App() {
  const [draft, setDraft] = useState('')
  const [savedFocus, setSavedFocus] = useState('')

  useEffect(() => {
    const storedFocus = window.localStorage.getItem(STORAGE_KEY)
    if (storedFocus) {
      setSavedFocus(storedFocus)
      setDraft(storedFocus)
    }
  }, [])

  const handleSave = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const trimmedDraft = draft.trim()
    setSavedFocus(trimmedDraft)
    window.localStorage.setItem(STORAGE_KEY, trimmedDraft)
  }

  const handleClear = () => {
    setDraft('')
    setSavedFocus('')
    window.localStorage.removeItem(STORAGE_KEY)
  }

  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      <section className="island-shell mx-auto max-w-2xl rounded-3xl p-6 sm:p-8">
        <p className="island-kicker mb-2">Tiny Demo App</p>
        <h1 className="mb-2 text-3xl font-bold text-[var(--sea-ink)]">
          Daily Focus Card
        </h1>
        <p className="mb-6 text-sm text-[var(--sea-ink-soft)]">
          Write one thing you want to focus on today. It saves in your browser.
        </p>

        <form onSubmit={handleSave} className="flex flex-col gap-3">
          <label htmlFor="focus-input" className="text-sm font-medium">
            Today&apos;s focus
          </label>
          <input
            id="focus-input"
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            placeholder="Ship one small improvement"
            className="rounded-xl border border-[rgba(23,58,64,0.2)] bg-white/70 px-4 py-2.5 text-sm text-[var(--sea-ink)] outline-none transition focus:border-[rgba(50,143,151,0.55)] focus:ring-2 focus:ring-[rgba(79,184,178,0.25)]"
          />

          <div className="flex gap-2">
            <button
              type="submit"
              className="rounded-full border border-[rgba(50,143,151,0.3)] bg-[rgba(79,184,178,0.16)] px-4 py-2 text-sm font-semibold text-[var(--lagoon-deep)]"
            >
              Save
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="rounded-full border border-[rgba(23,58,64,0.2)] bg-white/70 px-4 py-2 text-sm font-semibold text-[var(--sea-ink)]"
            >
              Clear
            </button>
          </div>
        </form>

        <div className="mt-6 rounded-2xl bg-[rgba(255,255,255,0.55)] p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--sea-ink-soft)]">
            Saved focus
          </p>
          <p className="mt-1 text-lg font-medium text-[var(--sea-ink)]">
            {savedFocus || 'Nothing saved yet.'}
          </p>
        </div>
      </section>
    </main>
  )
}
