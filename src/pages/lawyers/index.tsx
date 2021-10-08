import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core'
import { useStyles } from './styles'

const Lawyers = () => {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <Card
                className={classes.card}
            >
                <CardActionArea className={classes.cardArea}>
                    <CardMedia
                        component="img"
                        image="/assets/images/vision.jpg"
                        alt="profesional"
                        className={classes.cardMedia}
                    />
                    <CardContent
                        className={classes.cardContent}
                    >
                        <Typography gutterBottom variant="h5" component="div" color="primary">
                            NOMBRE DE PROFESIONAL
                        </Typography>
                        <Typography variant="body2" >
                            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card
                className={classes.card}
            >
                <CardActionArea className={classes.cardArea}>
                    <CardMedia
                        component="img"
                        image="/assets/images/vision.jpg"
                        alt="profesional"
                        className={classes.cardMedia}
                    />
                    <CardContent
                        className={classes.cardContent}
                    >
                        <Typography gutterBottom variant="h5" component="div" color="primary">
                            NOMBRE DE PROFESIONAL
                        </Typography>
                        <Typography variant="body2" >
                            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card
                className={classes.card}
            >
                <CardActionArea className={classes.cardArea}>
                    <CardMedia
                        component="img"
                        image="/assets/images/vision.jpg"
                        alt="profesional"
                        className={classes.cardMedia}
                    />
                    <CardContent
                        className={classes.cardContent}
                    >
                        <Typography gutterBottom variant="h5" component="div" color="primary">
                            NOMBRE DE PROFESIONAL
                        </Typography>
                        <Typography variant="body2" >
                            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default Lawyers
