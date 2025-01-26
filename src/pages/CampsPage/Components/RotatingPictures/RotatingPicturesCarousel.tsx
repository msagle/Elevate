import Carousel from 'react-bootstrap/Carousel';
import useWindowWidth from '../../../../hooks/useWindowWidth';

import img1 from './DSC_0123-3.jpg';
import img2 from './DSC_0152-2.jpg';
import img3 from './DSC_0337-3.jpg';
import img4 from './DSC_0538-2.jpg';
import img5 from './DSC_0613-2.jpg';
import img6 from './DSC_0664-2.jpg';
import img7 from './DSC_0700.jpg';
import img8 from './DSC_0832-2.jpg';
import img9 from './DSC_0846.jpg';
import img10 from './DSC_0997.jpg';

export default function InstructorCarousel() {
    const width = useWindowWidth();

    return (
        <Carousel style={{paddingBottom: '20px'}}>
            <Carousel.Item>
                <img src={img1} width={width*0.75} />
            </Carousel.Item>
            <Carousel.Item>
                <img src={img2} width={width*0.75}/>
            </Carousel.Item>
            <Carousel.Item>
                <img src={img3} width={width*0.75}/>
            </Carousel.Item>
            <Carousel.Item>
                <img src={img4} width={width*0.75}/>
            </Carousel.Item>
            <Carousel.Item>
                <img src={img5} width={width*0.75}/>
            </Carousel.Item>
            <Carousel.Item>
                <img src={img6} width={width*0.75}/>
            </Carousel.Item>
            <Carousel.Item>
                <img src={img7} width={width*0.75}/>
            </Carousel.Item>
            <Carousel.Item>
                <img src={img8} width={width*0.75}/>
            </Carousel.Item>
            <Carousel.Item>
                <img src={img9} width={width*0.75}/>
            </Carousel.Item>
            <Carousel.Item>
                <img src={img10} width={width*0.75}/>
            </Carousel.Item>
        </Carousel>
      );
}
