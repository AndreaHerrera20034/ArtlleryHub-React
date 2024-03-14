import { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

function FavoriteButton() {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <button onClick={toggleFavorite} className={`focus:outline-none ${isFavorite ? 'text-red-500' : 'text-gray-500 hover:text-red-500'}`}>
            {isFavorite ? <AiFillHeart className="h-6 w-6" /> : <AiOutlineHeart className="h-6 w-6" />}
        </button>
    );
}

export default FavoriteButton;