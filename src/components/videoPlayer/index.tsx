import { useStyles } from './styles'

const Carousel = () => {
    const classes = useStyles()

    return (

        <div className={classes.header} >
            <video loop autoPlay muted>
                <source src="/assets/videos/video.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

export default Carousel
