import { FC } from 'react';
import Card from 'components/Card/Card';

interface CastSliderItemProps {
    name: string
    img_url: string
}

const CastSliderItem: FC<CastSliderItemProps> = ({ name, img_url }) => {    

    return(
        <Card title={name} 
             img_url={img_url} 
             img_height={175} 
             card_width={150} 
             card_height={260} 
             link="1"  />
    )
}

export default CastSliderItem;
