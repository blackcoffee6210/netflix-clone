import { Movie } from "./useProps";

type LayoutProps = {
  title: string;
  movies: Movie[];
  isLargeRow?: boolean;
};

export const Layout = ({
  title,
  movies,
  isLargeRow,
}: LayoutProps) => {
  const imageUrl = "https://image.tmdb.org/5/p/original";

  return (
    <div>
      <h2>{title}</h2>
      <div>
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={`${imageUrl}${
              isLargeRow
                ? movie.poster_path
                : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};
