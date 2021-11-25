import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
  container: {
    minHeight: '80vh',
    padding: '0 25%',
    paddingTop: 430,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%'
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    margin: 20,
    width: '60%'
  },
  textArea: {
    '& .MuiInputBase-inputMultiline': {
      minHeight: 70
    },
    marginBottom: 10
  }
}))
