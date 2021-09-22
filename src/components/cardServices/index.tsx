import { useStyles } from './styles'
import React from 'react'
import { Card, CardContent, Grid, Typography } from '@material-ui/core'

const data = [
    {
        title: 'ASESORÍA JURÍDICA',
        text: 'Representacón judicial y extra judicial a personas naturales o jurídicas de carácter privado o público en las diferentes áreas del derecho:',
        list: [
            'Civil',
            'Administrativo',
            'Laboral',
            'Agrario',
            'Ambiental',
            'Penal',
            'Familia',
            'Policivo',
            'Disciplinario',
            'Tutelas, acciones populares y de grupo',
            'Cobro y recaudo de cartera vencida',
        ],
        color: '#ff5fA5'
    },
    {
        title: 'FORTALECIMIENTO INSTITUCIONAL',
        text: '',
        list: [
            'Asesoría a los comités municipales de justicia transicional en la ley 1448 de 2011',
            'Asesoría en la presentación de proyectos para la formalización de tierras y conservación de recursos naturales',
            'Asesoría y acompañamiento en la elaboracion de planes de ordenamiento territorial',
            'Asesoría y acompañamiento en la presentación de proyectos productivos',
        ],
        color: 'blue'
    },
    {
        title: 'PERITAZGOS, AVALÚOS Y CONCILIACIONES',
        text: 'Acompañamiento, asesoría y elaboración de pruebas anticipadas judiciales o extrajudiciales mediantes:',
        list: [
            'Avalúos',
            'Peritazgo',
            'Dictámenes de expertos profesionales',
            'Conciliaciones Extrajudiciales'
        ],
        color: 'orange'
    },
    {
        title: 'ASESORÍA CONTABLE Y FINANCIERA',
        text: 'Asesoría a personas naturales o jurídicas de derecho público o privado en:',
        list: [
            'Contabilidad',
            'Información Exógena',
            'Revisoría Fiscal',
            'Auditorias',
            'Declaración de impuestos',
        ],
        color: 'violet'
    },
    {
        title: 'ADMINISTRACIÓN DE BIENES',
        text: 'Servicio inmobiliario integral que garantiza la rentabilidad de los bienes. Acompañamiento y asesoría en procesos de:',
        list: [
            'Ventas',
            'Avaluos',
            'Arrendamientos',
            'Hipoteca',
            'Administración de Propiedad Horizontal',
            'Administración Fiduciaria',
        ],
        color: 'red'
    },
    {
        title: 'ORGANIZACIÓN DE EVENTOS',
        text: 'Organización de eventos sociales y empresariales con personas naturales o jurídicas. Socialización, promocíon, divulgación de políticas públicas con eventos comunitarios e institucionales',
        list: [],
        color: 'brown'
    },
]

const CardServices = () => {
    const classes = useStyles()
    return (
        <Grid container className={classes.root}>
            {data.map(dato =>
                <Grid item xs={4} lg={3}>
                    <div
                        style={{ backgroundColor: dato.color, color: 'white' }}
                        className={classes.card}
                    >
                        <Typography variant="h6" component="h2" className={classes.head}>
                            {dato.title}
                        </Typography>
                        <div className={classes.body}>
                            <Typography variant="caption" component="text" >
                                {dato.text}
                            </Typography>
                            {dato.list.map(item =>
                                <Typography variant="caption" component="h1">
                                    - {item}
                                </Typography>)}
                        </div>
                        <Typography variant="h5" component="h2" className={classes.footer}>
                            CONTACTAR
                        </Typography>

                    </div>
                </Grid>
            )}
        </Grid>
    )
}

export default CardServices
