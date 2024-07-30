import { useEffect, useState } from "react";
import { Movie } from "../../type";
import axios from "../../axios";
import { requests } from "../../request";

export const useProps = () => {
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    async function fetchData() {
      // 非同期でAPIからデータを取得する
      const request = await axios.get(requests.fetchNetflixOriginals);

      // 取得した映像データからランダムでmovieに格納
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  // descriptionの切り捨て用の関数
  const truncate = (str: string | undefined, n: number): string => {
    if (!str) {
      return "";
    }
    return str.length > n ? str.substring(0, n - 1) + "..." : str;
  };

  return { movie, truncate };
};
