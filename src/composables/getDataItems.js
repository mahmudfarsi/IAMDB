import { ref } from "vue"

export const useFetchItem = ({name}) => {
    const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTg3ZTg0ODZlMDEyMzk0MmQ5ZjUyNzU2MWFiMjQ3OCIsInN1YiI6IjY1ZjZjMzFhZDhmNDRlMDE3YzUwMzM3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-zJNixL2MLgqbhe-0wAVXI3b77AJ1b9aRMmU1ptF5LQ",
        },
      };
    const datas = ref([]);
    const isLoading = ref(false);

    const fetchData = async () => {
        isLoading.value = true
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`, options);
        datas.value = await response.json();
        isLoading.value = false;
        console.log(datas.value);
    }

    return {
        datas,
        fetchData,
        isLoading
    }
}