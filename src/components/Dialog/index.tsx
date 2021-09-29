import {
  Button,
  FormControl,
  FormGroup,
  IconButton,
  Select,
} from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { useStylesSignIn } from '../../pages/SignIn'
import { useState } from 'react'
import { TweetInput } from '../TweetInput'
import CloseIcon from '@material-ui/icons/Close'

interface ModalProps {
  visibleModal: 'Sign In' | 'Log In' | 'New Tweet' | null | undefined
  title: 'Sign In' | 'Log In' | null | undefined
  onClose: () => void
  styles: any
}

export const ModalBlock: React.FC<ModalProps> = ({
  visibleModal,
  title,
  styles,
  onClose,
}): React.ReactElement | null => {
  const [month, setMonth] = useState<any>('')

  const onMonthChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    setMonth(event.target.value)
  }

  return (
    <>
      <Dialog
        open={visibleModal === 'Log In'}
        onClose={onClose}
        aria-labelledby="form-dialog-title"
        className={styles.Dialog}
      >
        <DialogTitle id="form-dialog-title">{title}</DialogTitle>
        <DialogContent className={styles.dialogContent}>
          <FormControl component="fieldset" fullWidth>
            <FormGroup aria-label="position" row>
              <TextField
                className={styles.loginSideField}
                autoFocus
                margin="dense"
                variant="filled"
                InputLabelProps={{
                  shrink: true,
                }}
                id="email"
                label="Email Address"
                type="email"
                fullWidth
              />
            </FormGroup>
            <FormGroup aria-label="position" row>
              <TextField
                className={styles.loginSideField}
                autoFocus
                margin="dense"
                variant="filled"
                InputLabelProps={{
                  shrink: true,
                }}
                id="password"
                label="Password"
                type="password"
                fullWidth
              />
            </FormGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={onClose} color="primary">
            {visibleModal}
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={visibleModal === 'Sign In'}
        onClose={onClose}
        aria-labelledby="form-dialog-title"
        className={styles.Dialog}
      >
        <DialogTitle id="form-dialog-title">{title}</DialogTitle>
        <DialogContent className={styles.dialogContent}>
          <FormControl component="fieldset" fullWidth>
            <FormGroup aria-label="position" row>
              <TextField
                className={styles.loginSideField}
                autoFocus
                margin="dense"
                variant="filled"
                InputLabelProps={{
                  shrink: true,
                }}
                id="name"
                label="Name"
                type="name"
                fullWidth
              />
            </FormGroup>
            <FormGroup aria-label="position" row>
              <TextField
                className={styles.loginSideField}
                autoFocus
                margin="dense"
                variant="filled"
                InputLabelProps={{
                  shrink: true,
                }}
                id="email"
                label="Email Address"
                type="email"
                fullWidth
              />
            </FormGroup>
            <FormGroup aria-label="position" row>
              <TextField
                className={styles.loginSideField}
                autoFocus
                margin="dense"
                variant="filled"
                InputLabelProps={{
                  shrink: true,
                }}
                id="password"
                label="Password"
                type="password"
                fullWidth
              />
            </FormGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={onClose} color="primary">
            {visibleModal}
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={visibleModal === 'New Tweet'}
        onClose={onClose}
        aria-labelledby="form-dialog-title"
        className={styles.dialogModal}
        maxWidth="lg"
        style={{ height: '45%' }}
      >
        <DialogTitle id="form-dialog-title">
          <IconButton onClick={onClose} color="secondary" aria-label="close">
            <CloseIcon
              style={{ fontSize: 26, color: 'black' }}
              color="secondary"
            />
          </IconButton>
          {title}
        </DialogTitle>
        <DialogContent className={styles.dialogContent}>
          <TweetInput styles={styles} isModal={true} />
        </DialogContent>
      </Dialog>
    </>
  )
}
