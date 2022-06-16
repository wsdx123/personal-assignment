import { useNavigate } from 'react-router-dom'

import { NextIcon, PauseIcon, PlayIcon, PlayListIcon } from 'assets/svgs'
import styles from './player.module.scss'
import { useState } from 'react'

const Player = () => {
  const navigate = useNavigate()
  const [clicked, setClicked] = useState(false)

  const handlePlay = () => {
    setClicked((prev) => !prev)
  }

  const handleNavigate = () => {
    navigate('/playlist')
  }
  return (
    <div className={styles.playerBar}>
      <div className={styles.music}>
        {/* <button type='button' aria-label='playlist' onClick={handleNavigate}> */}
        <PlayListIcon className={styles.listIcons} />
        {/* </button> */}
        <dl className={styles.songInfo}>
          <dt>노래제목</dt>
          <dd>가수</dd>
        </dl>
      </div>
      <div>
        <button type='button' aria-label='svgbutton'>
          <NextIcon className={styles.prev} />
        </button>
        <button onClick={handlePlay} type='button' aria-label='svgbutton'>
          {clicked ? <PlayIcon className={styles.play} /> : <PauseIcon className={styles.pause} />}
        </button>
        <button type='button' aria-label='svgbutton'>
          <NextIcon className={styles.next} />
        </button>
      </div>
    </div>
  )
}

export default Player
