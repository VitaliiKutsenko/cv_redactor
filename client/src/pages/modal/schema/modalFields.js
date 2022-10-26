const schemaConstructor = names => {
  const fields = args => {
    return {
      name: args,
      values: [{ value: '' }],
    };
  };

  return names.map(item => {
    if (typeof item === 'string') {
      return fields(item);
    }

    if (typeof item === 'object') {
      const { name, options } = item;

      return {
        ...fields(name),
        ...options,
      };
    }
  });
};

// schemaConstructor string or object type {name:'',options:{item}}
export const modalFieldsSchema = {
  employment: schemaConstructor([
    'Company',
    'Position',
    'Responsibilities',
    'Location',
    'Start work',
    'End work',
  ]),
  skills: schemaConstructor(['Skills']),
  hobbies: schemaConstructor(['Hobbies']),
  languages: schemaConstructor(['Languages']),
  contact_info: schemaConstructor(['Email', 'Phone', 'Social network']),
  education: schemaConstructor([
    'University',
    'Department',
    'Education level',
    'Start education',
    'End education',
  ]),
  soft_skills: schemaConstructor(['Soft skills']),
  about_my_self: schemaConstructor(['About my self']),
};
