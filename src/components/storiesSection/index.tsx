import { Card, Grid, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core'
import React from 'react'
import { useStyles } from './styles'

const StoriesSection = () => {
    const classes = useStyles()
    return (
        <Grid container className={classes.container}>
            <Grid item xs={12}>
                <Typography variant="h2" component="div" className={classes.title} >
                    CASOS DE EXITO
                </Typography>

            </Grid>
            <Grid item xs={12} lg={6} className={classes.gridItem}>
                <Card >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="240"
                            image="./assets/images/mision.jpg"
                            alt="mision"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                CASO 1
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                El Colectivo de abogados GARCIA Y ASOCIADOS S.A.S., es una organización no gubernamental de Derechos Humanos con animo de lucro, que persigue como fin esencial, acercar el derecho a las comunidades mas vulnerables de los diferentes sectores sociales y culturales. Conformada por profesionales del derecho con excelentes capacidades, experiencia, destrezas y técnicas; que cuenta con el apoyo y acompañamiento constante de estudiantes en formación con enfoque social, becarios, auxiliares juristas y de otras áreas, quienes basados en su conocimiento defienden y promueven los Derechos Humanos desde la perspectiva integral, partiendo de su indivisibilidad y la interdependencia de todos los derecho y libertades, para contribuir con esto a la lucha contra la impunidad y la construcción de una sociedad en paz, justa y equitativa.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={12} lg={6} className={classes.gridItem}>
                <Card >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="240"
                            image="./assets/images/mision.jpg"
                            alt="mision"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                CASO 2
                            </Typography>
                            <Typography variant="body2" color="textSecondary" >
                                El Colectivo de abogados GARCIA Y ASOCIADOS S.A.S., es una organización no gubernamental de Derechos Humanos con animo de lucro, que persigue como fin esencial, acercar el derecho a las comunidades mas vulnerables de los diferentes sectores sociales y culturales. Conformada por profesionales del derecho con excelentes capacidades, experiencia, destrezas y técnicas; que cuenta con el apoyo y acompañamiento constante de estudiantes en formación con enfoque social, becarios, auxiliares juristas y de otras áreas, quienes basados en su conocimiento defienden y promueven los Derechos Humanos desde la perspectiva integral, partiendo de su indivisibilidad y la interdependencia de todos los derecho y libertades, para contribuir con esto a la lucha contra la impunidad y la construcción de una sociedad en paz, justa y equitativa.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </Grid >
    )
}

export default StoriesSection
