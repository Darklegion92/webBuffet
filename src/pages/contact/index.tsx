import { Button, Card, CardActionArea, CardContent, CardMedia, Checkbox, FormControlLabel, TextField, Typography } from '@material-ui/core'
import { Box } from '@mui/system'
import { useStyles } from './styles'

const Lawyers = () => {
    const classes = useStyles()


    return (
        <div className={classes.container}>
            <Card
                className={classes.card}
            >
                <Box
                    className={classes.form}
                    component="form"
                    autoComplete="off"
                >
                    <Typography variant="h5" component="h2">CONTACTENOS</Typography>
                    <TextField
                        id="outlined-error-helper-text"
                        label="Nombres"
                    //helperText="*Campo obligatorio"
                    />
                    <TextField
                        id="outlined-error-helper-text"
                        label="Teléfono"
                    //helperText="*Campo obligatorio"
                    />
                    <TextField
                        id="outlined-error-helper-text"
                        label="Correo"
                    //helperText="*Campo obligatorio"
                    />
                    <TextField
                        id="outlined-multiline-flexible"
                        multiline
                        minRows={4}
                        label="Mensaje"
                    //helperText="*Campo obligatorio"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="terms"
                                color="primary"
                            />
                        }
                        label="Términos y condiciones"
                    />
                    <Button variant="contained" color="primary" style={{ marginTop: 20 }}>
                        Enviar
                    </Button>
                </Box>
            </Card>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63229.88981647862!2d-72.53943997289099!3d7.908843607070954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e66459c645dd28b%3A0x26736c1ff4db5caa!2sC%C3%BAcuta%2C%20Cucuta%2C%20North%20Santander!5e0!3m2!1sen!2sco!4v1636111592148!5m2!1sen!2sco"
                width="800"
                height="600"
                style={{ border: 0 }}
                loading="lazy"
            />
        </div >
    )
}

export default Lawyers
