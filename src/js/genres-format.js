import { genresList } from './genres-list';

export function genresGalleryFormat(array) {
  const genreResult = genresList.reduce((acc, element) => {
    if (Array.isArray(array) && array.includes(element.id)) {
      acc.push(element.name);
    }
    return acc;
  }, []);

  if (!genreResult.length) {
    return 'Unknown genre';
  } else if (genreResult.length > 1) {
    return `${genreResult[0]}, ${genreResult[1]}`;
  } else {
    return genreResult.join(', ');
  }
}

export function genresLibraryFormat(array) {
  const genreResult = array.map(genre => genre.name);

  if (!genreResult.length) {
    return 'Unknown genre';
  } else if (genreResult.length > 2) {
    return `${genreResult[0]}, ${genreResult[1]}`;
  } else {
    return genreResult.join(', ');
  }
}
