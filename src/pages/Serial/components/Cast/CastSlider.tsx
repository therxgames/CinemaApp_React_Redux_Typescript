import { FC } from 'react';
import { IMG_138_175_URL } from 'const/imageUrl';
import noCastImage from 'assets/images/noCastImage.jpg';
import CastSliderItem from './CastSliderItem';

// импорт Swiper React
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/scrollbar';

import styles from  './CastSlider.module.scss';
import { Serial } from 'types/Serial';

interface CastSliderProps {
    serial: Serial | null
}

const CastSlider: FC<CastSliderProps> = ({ serial }) => {    

    return(
        <div className={styles.main}>
            <Swiper slidesPerView={7}
                    noSwiping={true}
                    modules={[Scrollbar]}
                    scrollbar={{ draggable: true }}

                    >
                {
                    serial?.credits.cast.map(item => {
                        const img_url = item.profile_path === null ? noCastImage : (IMG_138_175_URL + item.profile_path);

                        return(
                            <SwiperSlide>
                                <CastSliderItem img_url={img_url} name={item.name} />
                            </SwiperSlide>
                           
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default CastSlider;
