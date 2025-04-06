import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { TailSpin } from "react-loader-spinner";
import { useEffect, useState } from "react";
import { useEditGenre } from "../../../hooks/useEditGenre";
// import './AdminGenre.css';
import { useGenresById } from "../../../hooks/useGenres";

type GenreFormData = {
  name: string;
  description: string;
};

export function AdminGenre() {
  const params = useParams();
  const { genre, error, loading } = useGenresById(Number(params.id));
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<GenreFormData>();
  const navigate = useNavigate();
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const editGenre = useEditGenre();

  useEffect(() => {
    if (genre) {
      setValue("name", genre.name);
      setValue("description", genre.description);
    }
  }, [genre, setValue]);

  const onSubmit = async (data: GenreFormData) => {
    if (!params.id) return;

    setIsSubmitting(true);
    setServerError(null);

    try {
      const result = await editGenre(params.id, data);

      if (typeof result === "string") {
        setServerError(result);
      } else {
        navigate(`/adminGenre`);
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
    <div className="edit-genre-container">
      <h1>Edit Genre</h1>

      {serverError && <div className="error-message">{serverError}</div>}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Name</label>
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
          />
          {errors.name && <span className="error">{errors.name.message}</span>}
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            {...register("description", { required: "Description is required" })}
            rows={6}
          />
          {errors.description && <span className="error">{errors.description.message}</span>}
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
}
