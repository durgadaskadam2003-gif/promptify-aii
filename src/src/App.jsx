import { useState } from 'react'

export default function App() {
  const [idea, setIdea] = useState('')
  const [prompt, setPrompt] = useState('')

  const generatePrompt = () => {
    setPrompt(
      `Ultra realistic cinematic AI prompt for: ${idea}. High quality, realistic lighting, 4k detailed background.`
    )
  }

  return (
    <div className="container">
      <h1>Promptify AI</h1>

      <input
        type="text"
        placeholder="Enter your idea"
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
      />

      <button onClick={generatePrompt}>
        Generate Prompt
      </button>

      {prompt && (
        <div className="output">
          <p>{prompt}</p>
        </div>
      )}
    </div>
  )
}
