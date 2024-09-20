const parseContactsFilterParams = (query) => {
  const filter = {};

  if (query.contactType) {
    filter.contactType = query.contactType;
  }

  if (query.isFavourite !== undefined) {
    filter.isFavourite = query.isFavourite === 'true';
  }

  return filter;
};

export default parseContactsFilterParams;
