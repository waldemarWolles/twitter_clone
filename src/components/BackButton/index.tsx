import React from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { IconButton } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

export const BackButton: React.FC = (): React.ReactElement => {
  const history = useHistory()

  const handleClick = () => {
    history.goBack()
  }
  return (
    <IconButton onClick={handleClick} color="primary">
      <ArrowBackIcon />
    </IconButton>
  )
}
