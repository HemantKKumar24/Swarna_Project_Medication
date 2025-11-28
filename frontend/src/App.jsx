// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


// frontend\src\App.jsx
import React from "react";
import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";

import ListPage from "./pages/ListPage";
import AddMedicationPage from "./pages/AddMedicationPage";
import DetailPage from "./pages/DetailPage";
import DosesPage from "./pages/DosesPage";

function App() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-indigo-600 text-white p-4">
        <nav className="flex space-x-4">
          <Link to="/">Medications</Link>
          <Link to="/add">Add Medication</Link>
          <Link to="/doses">Upcoming Doses</Link>
        </nav>
      </header>

      <main className="p-4">
        <Routes>
          <Route
            path="/"
            element={
              <ListPage
                onSelectMedication={(med) => navigate(`/detail/${med.id}`)}
              />
            }
          />
          <Route path="/add" element={<AddMedicationPage />} />
          <Route path="/doses" element={<DosesPage />} />
          <Route path="/detail/:id" element={<DetailPageWrapper />} />
        </Routes>
      </main>
    </div>
  );
}

function DetailPageWrapper() {
  const { id } = useParams();
  return <DetailPage medicationId={id} />;
}

export default App;
