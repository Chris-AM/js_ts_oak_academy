const environment = {
  mapKey: import.meta.env.VITE_GOOGLE_KEY,
};

export const addGoogleMapKey = (): string => {
  const key: string = environment.mapKey;
  console.log("key =>", key);
  return key;
};

