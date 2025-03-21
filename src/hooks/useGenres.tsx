import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export interface IGenre {
    id: number;
    name: string;
    description: string;
}

export function useGenres() {
    const [genres, setGenres] = useState<IGenre[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchGenres() {
            setLoading(true);
            setError(""); // Очистка ошибки перед запросом

            try {
                const response = await fetch("http://localhost:5000/genres");

                if (!response.ok) {
                    throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
                }

                const genreData = await response.json();
                setGenres(genreData);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                    toast.error(`Ошибка загрузки жанров: ${error.message}`);
                }
            } finally {
                setLoading(false);
            }
        }

        fetchGenres();
    }, []);

    return { genres, loading, error };
}

export function useGenresById(id: number | undefined) {
    const [genre, setGenre] = useState<IGenre | null>(null);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!id) return;

        async function fetchGenresById() {
            try {
                const response = await fetch(`http://localhost:5000/genre/${id}`);

                if (!response.ok) {
                    throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
                }

                const genreData = await response.json();
                setGenre(genreData);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                    toast.error(`Ошибка загрузки жанра: ${error.message}`);
                }
            }
        }

        fetchGenresById();
    }, [id]);

    return { genre, error };
}
