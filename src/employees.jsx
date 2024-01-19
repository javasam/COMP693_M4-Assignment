import React from 'react'
import { createRoot } from 'react-dom/client'
import EmployeeList from './EmployeeList.jsx'

// IMPORTANT: ReactDOM.render() is no longer supported in React 18... switch to ReactDOMClient.createRoot() instead.

// Create a root using the 'content' element at the beginning of the <body> tag in '/public/index.html'
const root = createRoot(document.getElementById('content'))

// Call the root's render method to render the EmployeeList React Class Component with React.StrictMode
root.render(
    <React.StrictMode>
        <EmployeeList/>
    </React.StrictMode>
)
