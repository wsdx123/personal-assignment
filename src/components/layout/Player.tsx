import { useNavigate } from 'react-router-dom'

import { NextIcon, PlayIcon, PlayListIcon, PrevIcon } from 'assets/svgs'
import styles from './player.module.scss'

const Player = () => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/playlist')
  }
  return (
    <div className={styles.playerBar}>
      <div className={styles.music}>
        <button type='button' aria-label='playlist' onClick={handleNavigate}>
          <PlayListIcon className={styles.listIcons} />
        </button>
        <dl className={styles.songInfo}>
          <dt>노래제목</dt>
          <dd>가수</dd>
        </dl>
      </div>
      <div>
        <PrevIcon className={styles.icons} />
        <PlayIcon className={styles.icons} />
        <NextIcon className={styles.icons} />
      </div>
    </div>
  )
}

export default Player
