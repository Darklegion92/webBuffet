import {
  Card,
  Grid,
  CardActionArea,
  CardContent,
  Typography,
  CardHeader
} from '@material-ui/core'
import React from 'react'
import { useStyles } from './styles'

const Company = () => {
  const classes = useStyles()
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} className={classes.gridItem}>
        <Card>
          <CardActionArea>
            <CardHeader title='QUIENES SOMOS' className={classes.title} />
            <CardContent>
              <Typography variant='body2' color='textSecondary'>
                El Colectivo de abogados GARCIA Y ASOCIADOS S.A.S., es una
                organización no gubernamental de Derechos Humanos con animo de
                lucro, que persigue como fin esencial, acercar el derecho a las
                comunidades mas vulnerables de los diferentes sectores sociales
                y culturales. Conformada por profesionales del derecho con
                excelentes capacidades, experiencia, destrezas y técnicas; que
                cuenta con el apoyo y acompañamiento constante de estudiantes en
                formación con enfoque social, becarios, auxiliares juristas y de
                otras áreas, quienes basados en su conocimiento defienden y
                promueven los Derechos Humanos desde la perspectiva integral,
                partiendo de su indivisibilidad y la interdependencia de todos
                los derecho y libertades, para contribuir con esto a la lucha
                contra la impunidad y la construcción de una sociedad en paz,
                justa y equitativa.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Company
