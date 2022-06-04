import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from 'components/layout'
import Home from './home'
import Search from './search'
import Playlist from './playlist'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='search' element={<Search />} />
        </Route>
        <Route path='playlist' element={<Playlist />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
