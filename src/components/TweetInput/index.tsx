import { Avatar, Button, Divider, Grid, IconButton, TextareaAutosize } from '@material-ui/core'
import React from 'react'
import { useHomeStyles } from '../../pages/Home/theme'
import cn from 'classnames'
import PermMediaOutlinedIcon from '@material-ui/icons/PermMediaOutlined'
import GifIcon from '@material-ui/icons/Gif'
import EqualizerIcon from '@material-ui/icons/Equalizer'
import TodayOutlinedIcon from '@material-ui/icons/TodayOutlined'
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined'
import { CircularProgress } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { fetchAddTweet } from '../../redux-store/ducks/tweets/actionCreators'

interface TweetInputProps {
  styles: ReturnType<typeof useHomeStyles>
  isModal?: boolean
}

const MAX_LENGTH = 280

export const TweetInput: React.FC<TweetInputProps> = ({ styles, isModal }: TweetInputProps): React.ReactElement => {
  const dispatch = useDispatch()
  const [text, setText] = React.useState<string>('')
  const textLimitPercent = (text.length / MAX_LENGTH) * 100
  const textCount = MAX_LENGTH - text.length

  const handleChangeTextArea = (e: React.FormEvent<HTMLTextAreaElement>) => {
    if (e.currentTarget) {
      setText(e.currentTarget.value)
    }
  }

  const handleAddTweet = () => {
    dispatch(fetchAddTweet(text))
    setText('')
  }

  return (
    <Grid container className={styles.tweetInputWrapper}>
      <Grid item xs={1}>
        <Avatar
          className={styles.tweetAvatar}
          alt={`Avatar of user ${'Ilon Mask'}`}
          src={'https://pbs.twimg.com/profile_images/1416443682157473795/dGtFbtht_400x400.jpg'}
        />
      </Grid>
      <Grid item xs={11}>
        <div>
          <TextareaAutosize
            className={styles.inputTweetTextField}
            placeholder="What is happening?"
            onChange={handleChangeTextArea}
            value={text}
            rowsMin={isModal ? 3 : 'auto'}
          />

          <Divider style={{ marginLeft: 22 }} />
          <div className={styles.tweetInputButtons}>
            <div className={styles.optionsButtons}>
              <IconButton className={styles.tweetInputIconButton} aria-label="delete">
                <PermMediaOutlinedIcon className={styles.tweetInputIconIcon} />
              </IconButton>
              <IconButton className={styles.tweetInputIconButton} aria-label="delete">
                <GifIcon className={styles.tweetInputIconIcon} />
              </IconButton>
              <IconButton className={styles.tweetInputIconButton} aria-label="delete">
                <EqualizerIcon className={styles.tweetInputIconIcon} />
              </IconButton>
              <IconButton className={styles.tweetInputIconButton} aria-label="delete">
                <SentimentSatisfiedOutlinedIcon className={styles.tweetInputIconIcon} />
              </IconButton>
              <IconButton className={styles.tweetInputIconButton} aria-label="delete">
                <TodayOutlinedIcon className={styles.tweetInputIconIcon} />
              </IconButton>
            </div>
            {text && (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span>{textCount}</span>
                <div className={styles.tweetInputCircleProgress}>
                  <CircularProgress
                    variant="static"
                    size={20}
                    thickness={5}
                    value={textLimitPercent >= 100 ? 100 : textLimitPercent}
                    style={textLimitPercent > 100 ? { color: 'red' } : undefined}
                  />
                  <CircularProgress style={{ color: 'rgba(0,0,0,0.1)' }} variant="static" size={20} thickness={4} value={100} />
                </div>
              </div>
            )}

            <Button
              onClick={handleAddTweet}
              disabled={textLimitPercent > 100}
              variant="contained"
              color="primary"
              fullWidth
              className={cn(styles.tweetButton, styles.tweetInputTweetButton)}
              style={{ maxWidth: 80, marginTop: 0 }}
            >
              Tweet
            </Button>
          </div>
        </div>
      </Grid>
    </Grid>
  )
}
