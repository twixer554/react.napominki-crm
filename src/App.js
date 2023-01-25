import {
  AdminPage,
  AuthPage,
  EditObject,
  EditRestaurant,
  EditUser,
} from 'pages'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/admin/*" element={<AdminPage />} />

        <Route path="/admin/add-user/" element={<EditUser />} />
        <Route path="/admin/edit-user/:id" element={<EditUser />} />

        <Route path="/admin/add-object/" element={<EditObject />} />
        <Route path="/admin/edit-object/:id" element={<EditObject />} />

        <Route path="/admin/add-restaurant" element={<EditRestaurant />} />
        <Route path="/admin/edit-restaurant/:id" element={<EditRestaurant />} />
      </Routes>
    </Router>
  )
}

export default App
