import { useEffect, useState } from "react";
import { Movie } from "../../type";
import axios from "../../axios";
import { requests } from "../../request";

export const useProps = () => {
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        requests.fetchNetflixOriginals
      );

      setMovie(
        request.data.results[
          Math.floor(
            Math.random() * request.data.results.length - 1
          )
        ]
      );
    }
    fetchData();
  }, []);

  const truncate = (
    str: string | undefined,
    n: number
  ): string => {
    if (!str) {
      return "";
    }
    return str.length > n
      ? str.substring(0, n - 1) + "..."
      : str;
  };

  return { movie, truncate };
};