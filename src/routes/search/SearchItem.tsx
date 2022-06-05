import { useAppSelector } from 'hooks/useAppSelector'
import { getMusicData } from 'states/musicData'

import styles from './searchItem.module.scss'

const SearchItem = () => {
  const getMusic = useAppSelector(getMusicData)

  return (
    <ul>
      {getMusic.map((item, i) => {
        const key = `musicKey__${i}`
        return (
          <li className={styles.item} key={key}>
            <img alt='titleimage' src={item.image['#text']} />
            <dl>
              <dt>{item.artist}</dt>
              <dd>{item.name}</dd>
            </dl>
          </li>
        )
      })}
    </ul>
  )
}

export default SearchItem
