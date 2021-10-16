import {
  Avatar,
  CircularProgress,
  Grid,
  IconButton,
  Paper,
  Typography,
} from '@material-ui/core'
import Comments from '@material-ui/icons/ChatBubbleOutlineRounded'
import RepeatSharpIcon from '@material-ui/icons/RepeatSharp'
import FavoriteBorderSharpIcon from '@material-ui/icons/FavoriteBorderSharp'
import ShareSharpIcon from '@material-ui/icons/ShareSharp'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { Tweet } from '../../../components/Tweet'
import {
  fetchTweet,
  setTweet,
} from '../../../redux-store/ducks/tweet/actionCreators'
import {
  selectIsTweetLoading,
  selectTweetData,
} from '../../../redux-store/ducks/tweet/selectors'
import { useHomeStyles } from '../theme'
import classNames from 'classnames'

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
    return <Tweet styles={styles} {...tweetData} type="FullTweet" />
  }

  return null
}
