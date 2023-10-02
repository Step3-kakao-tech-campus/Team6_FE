export const search = async (query, setResults) => {
  try {
    const response = await fetch(`/api/search?query=${query}`);
    const data = await response.json();
    setResults(data.results);
  } catch (error) {
    console.error("Error performing search:", error);
  }
};
