import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { SearchForm, LoadButton, Gallery, Loader, Container } from 'components';
import { getCharacters, alertOnError, getSearchedCharacters, alertOnSearch, alertOnRepeatedQuery } from 'services';

export default function HomePage() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const getCards = async () => {
      try {
        setLoading(true);
        const { characters, totalPages, cancel } = await getCharacters(
          page,
          controller.signal
        );
        if (cancel) return;
        setCharacters(() => [...characters].sort((a, b) => a.name.localeCompare(b.name)));
        setTotalPages(totalPages);

      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    getCards();
    return () => controller.abort();
  }, [page]);


  useEffect(() => {
    if (!query) return;
    const controller = new AbortController();
    const getCharacters = async () => {
      try {
        setLoading(true);
        const { characters, totalResults, cancel } = await getSearchedCharacters(
          query,
          page,
          controller.signal
        );
        if (cancel) return;
        alertOnSearch(characters.length, totalResults);
        if (totalResults === 0) return setSearchParams('');
        setCharacters(prev => [...prev, ...characters]);
        setTotalResults(totalResults);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getCharacters();
    return () => controller.abort();
  }, [page, query, setSearchParams]);


  useEffect(() => {
    if (error) alertOnError();
  }, [error]);

  const searchFormSubmit = searchQuery => {
    const normalizedQuery = searchQuery.trim().toLowerCase();
    if (normalizedQuery === query) return alertOnRepeatedQuery(query);

    setSearchParams({ query: normalizedQuery });
    setPage(1);
    setTotalResults(0);
  };

  const onLoadMoreBtnClick = () => setPage(prevPage => prevPage + 1);
  return (
    <main>
      <Container>
        <SearchForm onSubmit={searchFormSubmit} reseter={setCharacters} />
        {loading && <Loader />}
        <Gallery characters={characters} path={'/'} />
        {totalPages < 1 && <Gallery characters={characters} path={'/'} />}

        {totalPages > 1 && <LoadButton onClick={onLoadMoreBtnClick} />}
      </Container>
    </main>
  );
}
