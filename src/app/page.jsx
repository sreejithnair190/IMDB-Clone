import Movies from "@/components/movies";
import axios from "axios";

export default async function Home({ searchParams }) {
  let data = [];
  const API_KEY = process.env.API_KEY;
  const genre = searchParams.genre || "fetchTrending";
  const res = await axios.get(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10 } }
  );
  data = res.data.results;
  return (
    <div>
      <Movies movies={data} />
    </div>
  );
}
