export const groupFields = ({ inputField,id,path }) => {
  const entries = Object.entries(inputField);
  const reduceFields = entries.reduce((acc, item) => {
    const fieldName = item[0].split('_')[0] || item;

    if (item[1]) {
        if (!acc[fieldName]) {
          acc[fieldName] = item[1];
      }else{
          if(Array.isArray(acc[fieldName]))
          acc[fieldName].push(...item[1])
        }
    }

    return acc;
  }, {});
  return [path] in reduceFields ? {values : reduceFields[path],id} : {values:[{...reduceFields,id}]}

};
