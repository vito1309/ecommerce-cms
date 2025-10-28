import { Routes, Route, Navigate } from "react-router-dom"
import { CategoryLayout } from "./cases/categories/components/data-table/category-layout"
import { CategoryForm } from "./cases/categories/components/category-form"

function App() {
 
  return (
   <div className="wrapper">

    <main>
      <Routes>
        <Route path="/" element={<Navigate to="/categories" replace />} />
        <Route path="/categories" element= { <CategoryLayout /> } />
        <Route path="/categories/new" element={ <CategoryForm /> } />
        <Route path="/categories/:id" element={ <CategoryForm /> } />

      </Routes>
    </main>


    </div>
  )
}

export default App