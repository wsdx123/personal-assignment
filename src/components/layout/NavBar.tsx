import { HomeIcon, SearchIcon } from 'assets/svgs'
import { NavLink } from 'react-router-dom'
import { cx } from 'styles'
import styles from './navBar.module.scss'

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <ul className={styles.navUl}>
        <li>
          <NavLink className={({ isActive }) => cx(styles.navItem, { [styles.clicked]: isActive })} to='/'>
            <HomeIcon className={styles.navIcon} />
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => cx(styles.navItem, { [styles.clicked]: isActive })} to='search'>
            <SearchIcon className={styles.navIcon} />
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
