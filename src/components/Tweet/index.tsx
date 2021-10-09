import { Avatar, Grid, IconButton, Paper, Typography } from '@material-ui/core'
import React from 'react'
import Comments from '@material-ui/icons/ChatBubbleOutlineRounded'
import RepeatSharpIcon from '@material-ui/icons/RepeatSharp'
import FavoriteBorderSharpIcon from '@material-ui/icons/FavoriteBorderSharp'
import ShareSharpIcon from '@material-ui/icons/ShareSharp'
import { useHomeStyles } from '../../pages/Home/theme'
import { Link } from 'react-router-dom'

interface TweetProps {
  _id: string
  styles: ReturnType<typeof useHomeStyles>
  user: {
    fullname: string
    username: string
    avatarURL: string
  }
  text: string
  date: string
}

export const Tweet: React.FC<TweetProps> = ({ styles, text, user, date, _id }: TweetProps): React.ReactElement => {
  return (
    <Paper variant="outlined" className={styles.tweetsTweet}>
      <Link className={styles.tweetsLink} to={`/home/tweet/${_id}`}>
        <Grid container spacing={3}>
          <Grid item xs={1}>
            <Avatar className={styles.tweetAvatar} alt={`Avatar of user ${user?.fullname}`} src={user?.avatarURL} />
          </Grid>
          <Grid item xs={11}>
            <Typography className={styles.tweetTitle}>
              <b>{user.fullname}</b>
              <span>
                @{user.username} · {date}
              </span>
            </Typography>
            <Typography variant={'body1'} className={styles.tweetContent}>
              {text}
            </Typography>
            <div className={styles.tweetFooter}>
              <div>
                <IconButton>
                  <Comments style={{ fontSize: 20 }} />
                </IconButton>
                <span style={{ color: '#0000008a' }}>1</span>
              </div>
              <div>
                <IconButton>
                  <RepeatSharpIcon style={{ fontSize: 20 }} />
                </IconButton>
              </div>
              <div>
                <IconButton>
                  <FavoriteBorderSharpIcon style={{ fontSize: 20 }} />
                </IconButton>
              </div>
              <div>
                <IconButton>
                  <ShareSharpIcon style={{ fontSize: 20 }} />
                </IconButton>
              </div>
            </div>
          </Grid>
        </Grid>
      </Link>
    </Paper>
  )
}
