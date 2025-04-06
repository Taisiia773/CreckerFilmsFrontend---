import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import * as z from "zod";

const genreSchema = z.object({
  name: z.string().min(2, "Название должно быть не менее 2 символов"),
  description: z.string().min(5, "Описание должно быть не менее 5 символов"),
});

type GenreFormData = z.infer<typeof genreSchema>;

export function GenreForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GenreFormData>({
    resolver: zodResolver(genreSchema),
  });

  const onSubmit = async (data: GenreFormData) => {
    try {
      const response = await fetch("http://localhost:5000/genres", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Ошибка при сохранении жанра");

      toast.success("Жанр успешно сохранен!");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Неизвестная ошибка");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        
      <input type="text" placeholder="Название" {...register("name")} />
      {errors.name && <p>{errors.name.message}</p>}

      <input type="text" placeholder="Описание" {...register("description")} />
      {errors.description && <p>{errors.description.message}</p>}

      <button type="submit">Сохранить</button>
    </form>
  );
}
