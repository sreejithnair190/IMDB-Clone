export default async function Home({ searchParams }) {
  try {
    const API_KEY = process.env.API_KEY;
    const genre = searchParams.genre || "fetchTrending";
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/550?api_key=acb0a4211460b275712cb3e18ca7c598"
    );
    // const res = await fetch(
    //   `https://api.themoviedb.org/3/${
    //     genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    //   }?api_key=${API_KEY}&language=en-US&page=1`, {next : { revalidate : 10 }}
    // );
    const data = res.json();
    const results = data.results;
    console.log(results);
  } catch (error) {
    console.log(error);
  }
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}
