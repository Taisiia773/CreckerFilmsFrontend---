import { useParams, useNavigate } from "react-router-dom";
import { useFilmById } from "../../../hooks/useFilmById";
import { useForm } from "react-hook-form";
import { TailSpin } from "react-loader-spinner";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useEditFilm } from "../../../hooks/useEditFilm";
import './AdminFilm.css';

type FilmFormData = {
  name: string;
  rating: number;
  year: number;
  language: string;
  country: string;
  age: number;
  img: string;
  filmImage: string;
  actors: string;
  information: string;
  someFacts: string;
};

export function AdminFilm() {
  const params = useParams();
  const { film, error, loading } = useFilmById(Number(params.id));
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FilmFormData>();
  const navigate = useNavigate();
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const editFilm = useEditFilm();


  useEffect(() => {
    if (film) {
      setValue("name", film.name);
      setValue("rating", film.rating);
      setValue("year", film.year);
      setValue("language", film.language);
      setValue("country", film.country);
      setValue("age", film.age);
      setValue("img", film.img);
      setValue("filmImage", film.filmImage);
      setValue("actors", film.actors);
      setValue("information", film.information);
      setValue("someFacts", film.someFacts);
    }
  }, [film, setValue]);

  const onSubmit = async (data: FilmFormData) => {
    if (!params.id) return;

    setIsSubmitting(true);
    setServerError(null);

    try {
      const result = await editFilm(params.id, data)
      
      if (typeof result === "string") {
        setServerError(result);
      } else {
        navigate(`/adminFilm`);
      }
    } catch (error) {
      setServerError("An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <TailSpin color="#00BFFF" height={80} width={80} />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="edit-film-container">
      <h1>Edit Film</h1>
      
      {serverError && <div className="error-message">{serverError}</div>}
      
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
              <label>Name</label>
              <input 
                {...register('name', { required: 'Name is required' })}
                type="text"
              />
              {errors.name && <span className="error">{errors.name.message}</span>}
            </div>
            
            <div className="form-group">
              <label>Rating</label>
              <input 
                {...register('rating', { required: 'Rating is required' })}
                type="text"
              />
              {errors.rating && <span className="error">{errors.rating.message}</span>}
            </div>
            
            <div className="form-group">
              <label>Year</label>
              <input 
                {...register('year', { 
                  required: 'Year is required',
                  valueAsNumber: true,
                  min: { value: 1888, message: 'First film was made in 1888' },
                  max: { value: new Date().getFullYear() + 5, message: 'Year is in future' }
                })}
                type="number"
              />
              {errors.year && <span className="error">{errors.year.message}</span>}
            </div>
            
            <div className="form-group">
              <label>Language</label>
              <input 
                {...register('language', { required: 'Language is required' })}
                type="text"
              />
              {errors.language && <span className="error">{errors.language.message}</span>}
            </div>
            
            <div className="form-group">
              <label>Country</label>
              <input 
                {...register('country', { required: 'Country is required' })}
                type="text"
              />
              {errors.country && <span className="error">{errors.country.message}</span>}
            </div>
            
            <div className="form-group">
              <label>Age restriction</label>
              <input 
                {...register('age', { 
                  required: 'Age restriction is required',
                  valueAsNumber: true,
                  min: { value: 0, message: 'Cannot be negative' },
                  max: { value: 21, message: 'Max age restriction is 21' }
                })}
                type="number"
              />
              {errors.age && <span className="error">{errors.age.message}</span>}
            </div>
            
            <div className="form-group">
              <label>Image URL</label>
              <input 
                {...register('img')}
                type="text"
              />
            </div>
            
            <div className="form-group">
              <label>Film Image URL</label>
              <input 
                {...register('filmImage')}
                type="text"
              />
            </div>
            
            <div className="form-group">
              <label>Actors</label>
              <textarea 
                {...register('actors')}
                rows={4}
              />
            </div>
            
            <div className="form-group">
              <label>Information</label>
              <textarea 
                {...register('information')}
                rows={6}
              />
            </div>
            
            <div className="form-group">
              <label>Some Facts</label>
              <textarea 
                {...register('someFacts')}
                rows={6}
              />
            </div>
            
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Saving...' : 'Save Changes'}
            </button>
      </form>
    </div>
  );
}