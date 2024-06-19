import useSWR from "swr";

export default function useFetch(path) {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${path}?api_key=${
      import.meta.env.VITE_API_KEY
    }`,
    (...args) => fetch(...args).then((res) => res.json())
  );
  return { data };
}
