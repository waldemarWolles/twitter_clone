import { Paper, Typography } from '@material-ui/core'
import React from 'react'
import { useHomeStyles } from '../../pages/Home/theme'
import IconButton from '@material-ui/core/IconButton'
import MoreHorizSharpIcon from '@material-ui/icons/MoreHorizSharp'
import Settings from '@material-ui/icons/SettingsOutlined'
import { selectIsTagsLoaded, selectTagsItems } from '../../redux-store/ducks/tags/selectors'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

interface TagProps {
  styles: ReturnType<typeof useHomeStyles>
}

export const Tags: React.FC<TagProps> = ({ styles }: TagProps): React.ReactElement | null => {
  const tags = useSelector(selectTagsItems)
  const isLoaded = useSelector(selectIsTagsLoaded)

  if (!isLoaded) {
    return null
  }

  return (
    <Paper className={styles.sideBarNewsBlock}>
      <div
        className={styles.sideBarNewsBlockHeader}
        style={{
          borderBottom: '1px solid #eff3f4',
          borderTopLeftRadius: '25px',
          borderTopRightRadius: '25px',
          backgroundColor: '#f7f9f9',
        }}
      >
        <Typography variant="h6" style={{ fontWeight: 800 }}>
          Trends for you
        </Typography>
        <IconButton style={{ padding: '8px' }} aria-label="delete">
          <Settings color="primary" />
        </IconButton>
      </div>
      {tags.map((tag) => {
        return (
          <Link className={styles.sideBarNewsSubBlockLink} key={tag._id} to={`/home/search?q=${tag.name}`}>
            <div className={styles.sideBarNewsSubBlock}>
              <div className={styles.sideBarNewsBlockHeader}>
                <Typography>
                  <b>{tag?.name}</b>
                </Typography>
                <IconButton style={{ padding: '8px' }} aria-label="delete">
                  <MoreHorizSharpIcon />
                </IconButton>
              </div>
              <span className={styles.sideBarNewsBlockTweets}>{tag?.count} Tweets </span>
            </div>
          </Link>
        )
      })}
      <div className={styles.sideBarNewsBlockFooter}>
        <div>
          <Typography style={{ color: '#1da1f2' }}>Show more</Typography>
        </div>
      </div>
    </Paper>
  )
}
