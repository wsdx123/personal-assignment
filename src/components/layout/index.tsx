import { Outlet } from 'react-router-dom'

import styles from './layout.module.scss'
import NavBar from './NavBar'
import Player from './Player'

const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.layout}>
        <main className={styles.main}>
          <Outlet />
        </main>
        <Player />
        <NavBar />
      </div>
    </div>
  )
}

export default Layout
