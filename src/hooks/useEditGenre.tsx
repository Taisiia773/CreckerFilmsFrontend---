import { Response } from "./types";

export function useEditGenre() {
  return async (
    id: string,
    updatedData: {
      name: string;
      description: string;
    }
  ): Promise<void | string> => {
    try {
      const response = await fetch(`http://localhost:5000/api/genre/${id}`, {
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