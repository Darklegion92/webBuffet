import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link'
import styles from "@/styles/onboarding.module.css";
import Slider from "react-slick";
import Carrusel from "@/components/Carrusel";

import { makeStyles, Theme } from "@material-ui/core";


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100vh',
    width: '100%',
    backgroundColor: '#202020'
  },
  dots: {
    [theme.breakpoints.down("xs")]: {
      marginBottom: 60,
    },
  }
}))

const OnBoarding = () => {
  const classes = useStyles()
  var settings = {
    dots: true,
    speed: 500,
    autoplay: false,
    swipeMove: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    mobileFirst: true,
    afterChange: function (index) {
      switch (index + 1) {
        case 1:
          document.getElementById("model2").hidden = true;
          document.getElementById("model1").hidden = false;
          break;
        case 2:
          document.getElementById("model1").hidden = true;
          document.getElementById("model2").hidden = false;
          break;
        default:
          document.getElementById("model2").hidden = true;
          document.getElementById("model1").hidden = true;
          break;
      }

    },
    appendDots: dots => (
      <div >
        <ul className={classes.dots}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "10px",
          height: "10px",
          border: "4px #000000",
          background: "white",
          borderRadius: "10px",
        }}
      >
      </div>
    ),
  };

  return (
    <div className={classes.root}>
      <div id="model1" className={`${styles["model1"]}`}><img src="/assets/images/modelo1.jpg" /></div>
      <div id="model2" className={`${styles["model1"]}`} hidden><img src="/assets/images/modelo2.jpg" /></div>
      <Carrusel>
        <div id="backgroundFlower2" className={`${styles["backgroundFlower2"]}`}><img src="/assets/images/florGrande.png" /></div>
        <div className={`${styles["skipButton"]}`}>
          <Link href={'/catalogo'}>
            <a >SALTAR</a>

          </Link>
        </div>
        <Slider {...settings} className={`${styles["slideStyle"]}`}>
          <div className={`${styles["slideContainer"]}`}>
            <div className={`${styles["mainLogo"]}`} ><img src="/assets/images/logoBlanco.png" /></div>
            <div>
              <div className={`${styles["boardingTitleContainer"]}`}><h1 className={`${styles["boardingTitle"]}`}>Ropa interior única</h1></div>
              <br /><br />
              <div >
                <p>Finos detalles en cada estilo con toques delicados para resaltar tu belleza y cuerpo</p>
              </div>
            </div>
          </div>
          <div className={`${styles["slideContainer"]}`}>
            <div className={`${styles["mainLogo"]}`} ><img src="/assets/images/logoBlanco.png" /></div>
            <div>
              <div className={`${styles["boardingTitleContainer"]}`}><h1 className={`${styles["boardingTitle"]}`}>Haz tus compras</h1></div>
              <br /><br />
              <div >
                <p>Rápidas, con gran variedad de referencias y con todo el respaldo de nuestra marca</p>
              </div>
            </div>
          </div>
        </Slider>
      </Carrusel>
    </div>
  );
}

export default OnBoarding