import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core'
import { useStyles } from './styles'

const LawyersData = [
  {
    img: './assets/images/lawyer1.png',
    name: 'DR. JOSE RENE GARCIA COLMENARES',
    description:
      'Abogado Egresado de la Universidad Libre de Colombia Seccional Cúcuta en el año 1994. Con Amplia experiencia como Abogado Litigante en diferentes áreas del Derecho, funcionario publico en varias oportunidades, el ultimo cargo como Director de la Unidad de Restitución de Tierras en Norte de Santander. Ha tramitado con Éxito diferentes procesos especialmente en el tema Administrativo contra el Municipio y la Nación. El ejercicio de su profesión y cargos desempeñados le han generado amplio reconocimiento a nivel regional por Particulares, Instituciones del orden Gubernamental y Organismos Internacionales. Es reconocido por sus conocimientos en los Temas de Protección, Formalización y Restitución de Tierras, Protección, conservación de los Recursos Naturales y Derecho Agrario. Con Conocimientos geográficos del territorio de Norte de Santander y Arauca al igual que en el tema del contexto social sobre el Desarrollo de Conflicto en sus diferentes épocas. Entres sus diversos estudios se resalta la culminación de su Maestría en Derecho Procesal y Contemporáneo el año inmediatamente anterior.'
  },
  {
    img: './assets/images/lawyer2.png',
    name: 'DR. DANIEL ALEJANDRO PEREZ SUAREZ',
    description:
      'Profesional del Derecho Egresado de la Universidad Libre seccional Cúcuta en el año 2008. Abogado Litigante con experiencia en las áreas de Civil, Penal, Laboral, Administrativo, Familia, Procesos Disciplinarios y conocedor de la Ley 1448 de 2011 especialmente en el tema de restitución de Tierras. Se ha desempeñado como asesor Jurídico de diferentes empresas de la  región. Dispone de un gran valor humano que entrega por completo al cumplimiento de sus objetivos profesionales.'
  },
  {
    img: './assets/images/lawyer3.png',
    name: 'DR. MAURICIO FERNANDO ZARATE BARRAGAN',
    description:
      'Profesional del Derecho Egresado de la Universidad Libre de Colombia Seccional Cúcuta en el año 2006. Especialista en Derecho Procesal y Derecho Aduanero. Conciliador en Derecho. Conocimiento en Restitución, Formalización y Protección de Tierras. Experiencia en el litigio de mas de 8 años en las áreas Civil, Laboral, Administrativo, Comercial y Familia.'
  },
  {
    img: './assets/images/lawyer4.png',
    name: 'DR. HEBER BAUTISTA VARGAS',
    description:
      'Profesional del Derecho egresado de la Universidad Libre de Colombia Seccional Cúcuta en el año 2008. Especialista en Derecho Penal, con trayectoria y reconocimiento en el área. Trabajo en Investigación de Estupefacientes como verificador de extinción de dominio. Manejo y coordinación de personal B&O. Como coordinador de seguridad Unidad de Restitución de Tierras.'
  },
  {
    img: './assets/images/lawyer5.png',
    name: 'DR. EXAR AUGUSTO JIMENEZ RINCON',
    description:
      'Abogado Litigante en ejercicio egresado de la Universidad Libre de Colombia en el año 2015. Laboro en la Jurisdicción de los Contencioso Administrativo de Norte de Santander en los años 2013 y 2014, también laboro con la Dirección de Administración Judicial de la Seccional de Cúcuta para el año 2015. Profesional del derecho que se caracteriza por su constancia, responsabilidad y conocimientos en las áreas del derecho.'
  },
  {
    img: './assets/images/lawyer6.png',
    name: 'DR. RAUL DANIEL DOMINGUEZ GUTIERREZ',
    description:
      'Contador Publico Egresado de la Universidad de Santander (UDES) Experiencia como asesor financiero, tributario y contable desde el año 2008. Con conocimiento en gerencia empresarial por su trayectoria con empresas de amplio reconocimiento en la ciudad que han crecido a nivel nacional. Con reconocimiento por el manejo de su profesión en forma ética especialmente en los temas relacionados con declaraciones de impuesto, exógena, revisoría fiscal y auditoria.'
  },
  {
    img: './assets/images/lawyer7.png',
    name: 'DRA. MARYORI MELEYSA MONTES MORA',
    description:
      'Abogada Egresada de la Universidad Simón Bolívar Sede Cúcuta. Con conocimiento en temas Administrativos, Civil, Laboral, Comercial, Formalización de Tierras, experiencia en agotamiento de Vía Gubernativa, Acciones Populares y Ley de 1448 de 2011 por el trabajo realizado con victimas del conflicto armado a través del consultorio jurídico de la Universidad Simón Bolívar y durante el tiempo laborado como auxiliar jurídico de la oficina de Abogados del Dr. José Rene García Colmenares.'
  }
]

const Lawyers = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      {LawyersData.map((lawyer, key) => (
        <Card className={classes.card} key={key}>
          <CardActionArea className={classes.cardArea}>
            <CardMedia
              component='img'
              image={lawyer.img}
              alt='profesional'
              className={classes.cardMedia}
            />
            <CardContent className={classes.cardContent}>
              <Typography
                gutterBottom
                variant='h5'
                component='div'
                color='primary'
              >
                {lawyer.name}
              </Typography>
              <Typography variant='body2' align='justify'>
                {lawyer.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  )
}

export default Lawyers
