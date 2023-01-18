// import { AuthPage, AdminPage, AddObject, AddRestaurant, AddUser } from './pages'
import { AdminPage, EditObject, EditUser } from 'pages'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/auth" element={<AuthPage />} /> */}
        <Route path="/admin/users" element={<AdminPage />} />
        <Route path="/admin/objects" element={<AdminPage />} />
        <Route path="/admin/add-user/" element={<EditUser />} />
        <Route path="/admin/add-object/" element={<EditObject />} />
        <Route path="/admin/edit-object/:id" element={<EditObject />} />
        <Route path="/admin/edit-user/:id" element={<EditUser />} />
        {/* <Route path="/admin/add-restaurant/:id" element={<AddRestaurant />} /> */}
      </Routes>
    </Router>
  )
}

export default App