import { toast } from 'react-toastify';

export const alertOnSearch = (charactersLength, totalResults) => {
  if (totalResults === 0) {
    toast.error(
      'Sorry, there are no characters matching your search query. Please try again.'
    );
  }
  if (totalResults !== 0) {
    toast.info(`We have already found ${totalResults} characters!`);
  }
};

export const alertOnError = () =>
  toast.error('Oooops! Something went wrong...');

export const alertOnEmptyQuery = () =>
  toast.warning('Please, enter something to search...');

export const alertOnRepeatedQuery = query =>
  toast.warning(`We have already found ${query} characters!`);
