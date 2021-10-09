import { CircularProgress } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Tweet } from '../../../components/Tweet'
import { fetchTweet, setTweet } from '../../../redux-store/ducks/tweet/actionCreators'
import { selectIsTweetLoading, selectTweetData } from '../../../redux-store/ducks/tweet/selectors'
import { useHomeStyles } from '../theme'

export const FullTweet: React.FC = (): React.ReactElement | null => {
  const styles = useHomeStyles()
  const dispatch = useDispatch()
  const tweetData = useSelector(selectTweetData)
  const isLoading = useSelector(selectIsTweetLoading)
  const params: { id: string } = useParams()
  const id = params.id

  console.log(tweetData)

  useEffect(() => {
    if (id) {
      dispatch(fetchTweet(id))
    }
    return () => {
      dispatch(setTweet(undefined))
    }
  }, [dispatch, id])

  if (isLoading) {
    return <CircularProgress style={{ margin: 'auto' }} />
  }

  if (tweetData) {
    return <Tweet styles={styles} {...tweetData} />
  }

  return null
}
