import { FC, useEffect } from 'react';
import noFilmImage from 'assets/images/noFilmImage.jpg';
import { IMG_138_175_URL } from 'const/imageUrl';
import noCastImage from 'assets/images/noCastImage.jpg';
import { useDebounce } from 'hooks/useDebounce';
import styles from './Search.module.scss';
import { dispatchStore } from 'hooks/dispatchStore';
import { changeSearch, fetchSearch } from 'store/action-creators/search';
import { useTypedSelector } from 'hooks/useTypedSelector';
import SearchItem from './SearchItem';
import { useDispatch } from 'react-redux';
import Loader from 'components/Loader/Loader';

interface SearchProps {

}

const Search: FC<SearchProps> = () => {   
    const { results, keyword, loading } = useTypedSelector(state => state.search); 

    const debouncedValue = useDebounce(keyword, 1000);
    const dispatch = useDispatch();

    useEffect(() => {
        if (debouncedValue.length > 0) {
            dispatchStore(fetchSearch(debouncedValue));
        }
    }, [debouncedValue]);

    return(
        <div className={styles.main}>
            <input className="form-control" type="search" placeholder="Search" value={keyword} onChange={(e) => dispatch(changeSearch(e.target.value))} />
            
            {
                keyword.length > 0 && 
                <div className={styles.list}>
                    {
                        loading && <Loader />
                    }

                    {
                        results.map(item => {
                            let name, type, imgSrc, link;

                            switch(item.media_type) {
                                case 'movie':
                                    name = item.title;
                                    imgSrc = item.backdrop_path ? (IMG_138_175_URL + item.backdrop_path) : noFilmImage;
                                    type = 'movie';
                                    link = `/movies/${item.id}`;
                                    break;
                                case 'person':
                                    name = item.name;
                                    imgSrc = item.profile_path ? (IMG_138_175_URL + item.profile_path) : noCastImage;
                                    type = item.known_for_department;
                                    link = `/films/${item.id}`;
                                    break;
                                case 'tv':
                                    name = item.name;
                                    imgSrc = item.poster_path ? (IMG_138_175_URL + item.poster_path) : noCastImage;
                                    type = "tv series";
                                    link = `/serials/${item.id}`;
                                    break;
                                default:
                                    name = '';
                                    type = ''
                                    imgSrc = ''; 
                                    link = '';
                            }

                            return (
                                <SearchItem key={item.id} name={name} type={type} imgSrc={imgSrc} link={link} />
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}

export default Search;
