import { SearchIcon } from 'assets/svgs'
import { useAppDispatch } from 'hooks/useAppDispatch'

import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { getApi } from 'services/getData'
import { setTodoList } from 'states/todo'
import styles from './search.module.scss'

const Search = () => {
  const dispatch = useAppDispatch()
  const [test, setTest] = useState('')
  const [submitVal, setSubmitVal] = useState('')

  const handleForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitVal(test)

    getApi({ track: submitVal }).then((res) => {
      console.log(res.data)
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
    </div>
  )
}

export default Search
