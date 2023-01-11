import { FC } from 'react';
import { Movie } from 'types/Movie';
import { IMG_138_175_URL } from 'const/imageUrl';
import noCastImage from 'assets/images/noCastImage.jpg';
import CastSliderItem from './CastSliderItem';

// импорт Swiper React
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/scrollbar';

import styles from  './CastSlider.module.scss';

interface CastSliderProps {
    movie: Movie | null
}

const CastSlider: FC<CastSliderProps> = ({ movie }) => {    

    return(
        <div className={styles.main}>
            <Swiper slidesPerView={7}
                    noSwiping={true}
                    modules={[Scrollbar]}
                    scrollbar={{ draggable: true }}

                    >
                {
                    movie?.credits.cast.map(item => {
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
