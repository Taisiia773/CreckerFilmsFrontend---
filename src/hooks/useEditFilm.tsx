import { Response } from "./types";

export function useEditFilm() {
  return async (
    id: string,
    updatedData: {
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
    }
  ): Promise<void | string> => {
    try {
      const response = await fetch(`http://localhost:5000/api/film/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });
      const result: Response<string> = await response.json();

      if (result.status === "error") {
        console.log(result.message);
        return result.message;
      } else {
        console.log("data updated:", result.data);
      }
    } catch (error) {
      return "Unexpected error";
    }
  };
}