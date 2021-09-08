import React from 'react'
import jsxToString from 'jsx-to-string'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import dracula from 'prism-react-renderer/themes/dracula'

const Live = ({ code, scope }) => (
  <div>
    <h1>live</h1>
    <LiveProvider code={jsxToString(code)} scope={scope} theme={dracula}>
      <LiveEditor />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  </div>

)

export default Live
