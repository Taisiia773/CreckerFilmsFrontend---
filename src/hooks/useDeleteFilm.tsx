import axios from "axios";

export const useDeleteFilm = () => {
  return async (id: number) => {
    try {
      await axios.delete(`http://localhost:5000/film/${id}`);
      return true;
    } catch (error: any) {
      return error.message || "Error deleting film";
    }
  };
};
