import { useAppDispatch } from 'hooks/useAppDispatch'

import { useMount } from 'react-use'
import { getApi } from 'services/getData'
import { xmlParse } from 'services/xmlParse'
import { setTodoList } from 'states/todo'
import styles from './home.module.scss'

const Home = () => {
  // const dispatch = useAppDispatch()

  // useMount(() => {
  //   getApi().then((res) => {
  //     dispatch(setTodoList(xmlParse(res.data).rss.channel.item))
  //   })
  // })

  return (
    <div>
      <img alt='logo' src='/logo.png' className={styles.logo} />
      Home
    </div>
  )
}

export default Home
