export const groupFields = ({ inputField, path }) => {
  const entries = Object.entries(inputField);

  const reduceFields = entries.reduce((acc, item) => {
    const full = item[0].split('_')[0] || item;

    if (item[1]) {
      if (Array.isArray(item[1])) {
        if (!acc[full]) {
          acc[full] = [item[1]];
        } else {
          return [...acc[full], ...item[1]];
        }
      }
    }

    // console.log(acc[full]);

    return acc;
  }, {});

  return [];
  // if (path in reduceFields) {
  //   return Object.values(reduceFields);
  // } else {
  //   return { ...reduceFields };
  // }
};
