import React from 'react'
import { Button, Typography } from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter'
import IconButton from '@material-ui/core/IconButton'
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined'
import SearchIcon from '@material-ui/icons/Search'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined'
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import { useHomeStyles } from '../../pages/Home/theme'
import { ModalBlock } from '../Dialog'
import cn from 'classnames'
import { Link } from 'react-router-dom'

interface SideMenuProps {
  styles: ReturnType<typeof useHomeStyles>
}

export const SideMenu: React.FC<SideMenuProps> = ({ styles }: SideMenuProps): React.ReactElement => {
  const [modalOpen, setModalOpen] = React.useState<any>('')

  const handleModalOpen = () => {
    setModalOpen('New Tweet')
  }

  const handleModalClose = () => {
    setModalOpen('')
  }

  return (
    <ul className={styles.sideMenuList}>
      <li className={styles.sideMenuListItem}>
        <Link to={`/home`}>
          <IconButton aria-label="delete" className={cn(styles.iconButton, styles.logoWrapper)}>
            <TwitterIcon className={styles.logo} color="primary" />
          </IconButton>
        </Link>
      </li>

      <li className={styles.sideMenuListItem}>
        <IconButton aria-label="delete" className={styles.iconButton}>
          <SearchIcon className={styles.sideMenuListItemIcon} />
          <Typography className={styles.sideMenuListItemLabel} variant="h6">
            Search
          </Typography>
        </IconButton>
      </li>
      <li className={styles.sideMenuListItem}>
        <IconButton aria-label="delete" className={styles.iconButton}>
          <NotificationsNoneOutlinedIcon className={styles.sideMenuListItemIcon} />
          <Typography className={styles.sideMenuListItemLabel} variant="h6">
            Notifications
          </Typography>
        </IconButton>
      </li>
      <li className={styles.sideMenuListItem}>
        <IconButton aria-label="delete" className={styles.iconButton}>
          <MailOutlineIcon className={styles.sideMenuListItemIcon} />{' '}
          <Typography className={styles.sideMenuListItemLabel} variant="h6">
            Messages
          </Typography>
        </IconButton>
      </li>
      <li className={styles.sideMenuListItem}>
        <IconButton aria-label="delete" className={styles.iconButton}>
          <BookmarkBorderIcon className={styles.sideMenuListItemIcon} />{' '}
          <Typography className={styles.sideMenuListItemLabel} variant="h6">
            Bookmarks
          </Typography>
        </IconButton>
      </li>
      <li className={styles.sideMenuListItem}>
        <IconButton aria-label="delete" className={styles.iconButton}>
          <ListAltOutlinedIcon className={styles.sideMenuListItemIcon} />{' '}
          <Typography className={styles.sideMenuListItemLabel} variant="h6">
            List
          </Typography>
        </IconButton>
      </li>
      <li className={styles.sideMenuListItem}>
        <IconButton aria-label="delete" className={styles.iconButton}>
          <PermIdentityOutlinedIcon className={styles.sideMenuListItemIcon} />{' '}
          <Typography className={styles.sideMenuListItemLabel} variant="h6">
            Profile
          </Typography>
        </IconButton>
      </li>
      <li>
        <Button variant="contained" color="primary" fullWidth className={styles.tweetButton} onClick={handleModalOpen}>
          Tweet
        </Button>
        <ModalBlock visibleModal={modalOpen} title={null} styles={styles} onClose={handleModalClose}>
          ...
        </ModalBlock>
      </li>
    </ul>
  )
}
