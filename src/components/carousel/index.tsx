


import CarouselMaterial from 'react-material-ui-carousel'
import { useStyles } from './styles'

const Carousel = () => {
    const classes = useStyles()

    return (
        <>
            <div className={classes.mark}></div>
            <CarouselMaterial
                className={classes.carrousel}
                navButtonsAlwaysInvisible
                stopAutoPlayOnHover={false}
                interval={4000}
                timeout={700}
                indicators={false}
            >
                <img src="./assets/images/slider1.jpg" width="100%" />
                <img src="./assets/images/slider1.jpg" width="100%" />
            </CarouselMaterial>
        </>
    )
}

export default Carousel
