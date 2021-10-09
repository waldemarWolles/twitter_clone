import { Container, Divider, FormControl, Grid, IconButton, Input, InputAdornment, Typography } from '@material-ui/core'
import { Paper } from '@material-ui/core'
import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import { Tweet } from '../../components/Tweet'
import { SideMenu } from '../../components/SideMenu'
import { TweetInput } from '../../components/TweetInput'
import { useHomeStyles } from './theme'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTweets } from '../../redux-store/ducks/tweets/actionCreators'
import { selectIsTweetsLoading, selectTweetsItems } from '../../redux-store/ducks/tweets/selectors'
import CircularProgress from '@material-ui/core/CircularProgress'
import { fetchTags } from '../../redux-store/ducks/tags/actionCreators'
import { Tags } from '../../components/Tags'
import { Route } from 'react-router'
import { BackButton } from '../../components/BackButton'
import { FullTweet } from './components/FullTweet'
// import { fetchTweet } from '../../redux-store/ducks/tweet/actionCreators'

export const Home: React.FC = (): React.ReactElement => {
  const styles = useHomeStyles()
  const dispatch = useDispatch()
  const tweets = useSelector(selectTweetsItems)
  const isLoading = useSelector(selectIsTweetsLoading)

  React.useEffect(() => {
    dispatch(fetchTweets())
    dispatch(fetchTags())
    // dispatch(fetchTweet())
  }, [dispatch])

  return (
    <Container className={styles.wrapper} maxWidth="lg">
      <Grid container className={styles.root} spacing={3}>
        <Grid item xs={3}>
          <SideMenu styles={styles} />
        </Grid>

        <Grid item xs={6}>
          <Paper variant="outlined" className={styles.tweetsWrapper}>
            <Paper variant="outlined" className={styles.tweetsHeader}>
              <Route path="/home" exact>
                <Typography variant="h6">Main Page</Typography>
              </Route>{' '}
              <Route path={['/home/search', '/home/tweet']}>
                <BackButton />
              </Route>{' '}
              <Route path={'/home/search'} exact>
                <Typography variant="h6">Tweets</Typography>
              </Route>{' '}
              <Route path={'/home/tweet'}>
                <Typography variant="h6">Make a tweet</Typography>
              </Route>
            </Paper>

            <Route path={['/home', '/home/search']} exact>
              <TweetInput styles={styles} />
            </Route>

            <Divider className={styles.divider} />
            <Route path="/home" exact>
              {isLoading ? (
                <CircularProgress style={{ margin: '200px auto 0' }} />
              ) : (
                tweets.map((tweet) => {
                  return <Tweet _id={tweet._id} key={tweet.id} styles={styles} text={tweet.text} user={tweet.user} date={tweet.date} />
                })
              )}
            </Route>

            <Route path="/home/tweet/:id" component={FullTweet} exact></Route>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <div className={styles.sideSearchAndNews}>
            <FormControl fullWidth variant="standard">
              <Input
                disableUnderline={true}
                placeholder="Search on Twitter"
                className={styles.searchField}
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon className={styles.searchFieldIcon} />
                  </InputAdornment>
                }
              />
            </FormControl>
            <Tags styles={styles} />
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}
