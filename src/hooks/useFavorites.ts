import { IProduct } from "@/models";
import { useEffect, useState } from "react";

const useFavorites = () => {
    const [favorites, setFavorites] = useState<IProduct[]>(() => {
        try {
            const storedFavorites = localStorage.getItem("favorites");
            return storedFavorites ? JSON.parse(storedFavorites) : [];
        } catch (error) {
            console.log("Error reading from localStorage", error);
            return [];
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem("favorites", JSON.stringify(favorites));
        } catch (error) {
            console.log("Error in localStorage", error);
        }
    }, [favorites]);

    const toggleFav = (favItem: IProduct) => {
        setFavorites((prevFavorites) => {
            const isFavorite = prevFavorites?.find(
                (prevItem) => prevItem.id === favItem.id
            );

            if (isFavorite) {
                console.log('clicked remove fav')
                return prevFavorites.filter(
                    (prevItem) => prevItem.id !== favItem.id
                );
            } else {
                console.log('clicked add fav')
                return [...prevFavorites, favItem];
            }
        });
    };

    return {
        favorites,
        toggleFav,
    };
};

export { useFavorites };
