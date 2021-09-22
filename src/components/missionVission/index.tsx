import { useStyles } from './styles'
import React from 'react'
import { Grid, Icon, Typography } from '@material-ui/core'

const MissionVission = () => {
    const classes = useStyles()
    return (
        <Grid container justifyContent="center" className={classes.container} >
            <Grid item xs={12} lg={6} className={classes.gridItem}>
                <div className={classes.cardLeft}>
                    <Icon className={classes.icon}>
                        gps_fixed
                    </Icon>
                    <Typography variant="h3" component="h2" className={classes.text}>
                        MISIÓN

                    </Typography>
                    <Typography variant="body2" component="h2" className={classes.paragraph}>
                        El Colectivo de abogados GARCIA Y ASOCIADOS S.A.S., es una organización no gubernamental de Derechos Humanos con animo de lucro, que persigue como fin esencial, acercar el derecho a las comunidades mas vulnerables de los diferentes sectores sociales y culturales. Conformada por profesionales del derecho con excelentes capacidades, experiencia, destrezas y técnicas; que cuenta con el apoyo y acompañamiento constante de estudiantes en formación con enfoque social, becarios, auxiliares juristas y de otras áreas, quienes basados en su conocimiento defienden y promueven los Derechos Humanos desde la perspectiva integral, partiendo de su indivisibilidad y la interdependencia de todos los derecho y libertades, para contribuir con esto a la lucha contra la impunidad y la construcción de una sociedad en paz, justa y equitativa.
                    </Typography>
                </div>
            </Grid>
            <Grid item xs={12} lg={6} className={classes.gridItem}>
                <div className={classes.cardRight}>
                    <Icon className={classes.icon}>
                        visibility
                    </Icon>
                    <Typography variant="h3" component="h2" className={classes.text}>
                        VISIÓN
                    </Typography>
                    <Typography variant="body2" component="h2" className={classes.paragraph}>
                        Colectivo de abogados GARCIA Y ASOCIADOS S.A.S. se constituye en Norte de Santander para satisfacer la necesidad de protección de derechos humanos, el cumplimiento de los acuerdos internacionales del Derecho Internacional humanitario y la defensa de los intereses personales y colectivos de todos los ciudadanos del territorio Colombiano, con el firme propósito de convertirnos a corto plazo en un reconocido colectivo a nivel nacional, esto como respuesta a un excelente trabajo social enfocado al servicio y asistencia en la construcción de una sociedad justa, democrática y equitativa.
                    </Typography>
                </div>
            </Grid>
        </Grid>
    )
}

export default MissionVission
