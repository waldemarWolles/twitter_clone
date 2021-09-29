import { Button, makeStyles, Typography } from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter'
import SearchIcon from '@material-ui/icons/Search'
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble'
import { useState } from 'react'
import React from 'react'
import { ModalBlock } from '../components/Dialog'

export const useStylesSignIn = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    height: '100%',
  },
  blueSide: {
    backgroundColor: '#71C9F8',
    height: '100vh',
    display: 'flex',
    flex: '0 0 50%',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  blueSideBigIcon: {
    position: 'absolute',
    left: '25%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '350%',
    height: '350%',
  },
  blueSideListInfo: {
    position: 'relative',
    listStyle: 'none',
    padding: '0',
    margin: '0',
    width: '380',
    '& h6': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'left',
      color: 'white',
      fontWeight: '600',
      marginBottom: 30,
    },
  },
  blueSideListInfoIcon: {
    fontSize: 32,
    marginRight: 15,
  },
  loginSide: {
    display: 'flex',
    flex: '0 0 50%',
    alignItems: 'center',
    justifyContent: 'left',
    overflow: 'hidden',
  },
  loginSideTwitterIcon: {
    fontSize: 45,
    marginBottom: 20,
  },
  loginSideWrapper: {
    width: 380,
    marginLeft: 30,
  },
  loginSideTitle: {
    fontWeight: 700,
    fontSize: 32,
    marginBottom: 55,
  },
  loginSideSubTitle: {
    fontWeight: 700,
    fontSize: 22,
    marginBottom: 15,
  },
  loginSideField: {
    marginBottom: 18,
    overflow: 'hidden',
  },
  Dialog: {
    '& div>div': {
      maxWidth: '700px',
      overflow: 'hidden',
    },
  },
  dialogContent: {
    width: '600px',
  },
}))

export const SignIn: React.FC = (): React.ReactElement => {
  const styles = useStylesSignIn()
  const [visibleModal, setVisibleModal] = useState<
    'Sign In' | 'Log In' | null | undefined
  >()

  const handleOpenSignInClick = (): void => {
    setVisibleModal('Sign In')
  }

  const handleOpenLogInClick = (): void => {
    setVisibleModal('Log In')
  }

  const handleClose = (): void => {
    setVisibleModal(null)
  }

  return (
    <div className={styles.wrapper}>
      <section className={styles.blueSide}>
        <TwitterIcon color="primary" className={styles.blueSideBigIcon} />
        <ul className={styles.blueSideListInfo}>
          <li>
            <Typography variant="h6">
              <SearchIcon className={styles.blueSideListInfoIcon} />
              Read about what is interesting
            </Typography>
          </li>
          <li>
            <Typography variant="h6">
              <PeopleOutlineIcon className={styles.blueSideListInfoIcon} />
              Discover what is discuss in the world
            </Typography>
          </li>
          <li>
            <Typography variant="h6">
              <ChatBubbleIcon className={styles.blueSideListInfoIcon} />
              Join to the conversations
            </Typography>
          </li>
        </ul>
      </section>
      <section className={styles.loginSide}>
        <div className={styles.loginSideWrapper}>
          <TwitterIcon
            color="primary"
            className={styles.loginSideTwitterIcon}
          />
          <Typography className={styles.loginSideTitle} variant="h4">
            Discover what is going on in the world
          </Typography>
          <Typography className={styles.loginSideSubTitle}>
            Join twitter today
          </Typography>
          <Button
            style={{ marginBottom: 20 }}
            color="primary"
            variant="contained"
            fullWidth
            onClick={handleOpenSignInClick}
          >
            Sign In
          </Button>
          <Button
            color="primary"
            variant="outlined"
            fullWidth
            onClick={handleOpenLogInClick}
          >
            Log In
          </Button>
        </div>
        <ModalBlock
          visibleModal={visibleModal}
          styles={styles}
          title={visibleModal}
          onClose={handleClose}
        />
      </section>
    </div>
  )
}
