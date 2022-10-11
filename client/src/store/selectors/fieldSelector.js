export const fieldSelector = {
  addField(payload, state) {
    if (payload?.types in state) {
      const { id, multi, point, ...args } = payload.values;

      const idGenerator = Math.max(
        ...state[payload.types].reduce((acc, item) => {
          return [...acc, item.id];
        }, [])
      );

      const addField = [
        ...state[payload.types].slice(0, payload.index + 1),
        {
          id: idGenerator + 1,
          point: `${payload.values.point}_${idGenerator + 1}`,
          multi: false,
          isNewField: true,
          ...args,
        },
        ...state[payload.types].slice(payload.index + 1),
      ];

      return {
        ...state,
        [payload.types]: [...addField],
      };
    }
  },
  removeField(payload, state) {
    if (payload?.types in state) {
      const filterState = state[payload.types].filter(item => {
        if (item) {
          return item?.id !== payload?.values?.id;
        }
      });

      return {
        ...state,
        [payload.types]: [...filterState],
      };
    }
  },
};
