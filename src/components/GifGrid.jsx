import { GifsItem } from "./GifsItem";
import  PropTypes  from "prop-types";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {


    const { images, isLoading } = useFetchGifs(category);


    return (
        <>
            <h3>{category}</h3>
            {isLoading &&
                <h2>Cargando...</h2>
            }
            <div className="card-grid">
                {images.map((image) => (
                    <GifsItem
                        key={image.id}
                        {...image} // exparce las propiedades individuales 
                    />
                ))}
            </div>
        </>
    )
}

GifGrid.propTypes={
    category: PropTypes.string.isRequired
}
