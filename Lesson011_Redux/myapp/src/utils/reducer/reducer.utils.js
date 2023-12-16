export const createAction = (type, payload) => {
    console.log(type);
    console.log(payload);

  return { type, payload };
};
