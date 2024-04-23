document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
  
    searchForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const searchTerm = searchInput.value;
      const searchResultsData = await searchApi(searchTerm);
      displayResults(searchResultsData);
    });
  
    async function searchApi(query = '') {
      try {
        const response = await fetch(`/api/search?q=${query}`);
        console.log(response);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return await response.json();
      } catch (error) {
        console.error('Error fetching data:', error);
        return { results: [] }; // Return empty array on error
      }
    }
  
    function displayResults(results) {
      searchResults.innerHTML = '';
      if (results.results.length === 0) {
        searchResults.textContent = 'No results found';
      } else {
        const ul = document.createElement('ul');
        results.results.forEach(result => {
          const li = document.createElement('li');
          li.textContent = result;
          ul.appendChild(li);
        });
        searchResults.appendChild(ul);
      }
    }
  });
  