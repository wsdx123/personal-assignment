import { ChangeEvent, FormEvent, useState } from 'react'

import { useAppDispatch } from 'hooks/useAppDispatch'
import { setMusicData } from 'states/musicData'
import { getApi } from 'services/getData'
import { SearchIcon } from 'assets/svgs'

import styles from './search.module.scss'
import SearchItem from './SearchItem'

const Search = () => {
  const dispatch = useAppDispatch()
  const [test, setTest] = useState('')
  const [submitVal, setSubmitVal] = useState('')
  const [isSearched, setIsSearched] = useState(false)

  const handleForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSearched(true)
    setSubmitVal(test)

    getApi({ track: submitVal }).then((res) => {
      dispatch(setMusicData(res.data.results.trackmatches.track))
    })
    // console.log(submitVal)
  }

  const handleTest = (e: ChangeEvent<HTMLInputElement>) => {
    setTest(e.currentTarget.value)
  }

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleForm}>
        <input value={test} onChange={handleTest} />
        <button className={styles.searchBtn} type='submit'>
          <SearchIcon className={styles.icon} />
        </button>
      </form>

      {isSearched && <SearchItem />}
    </div>
  )
}

export default Search
