const getValueByStringKey = (value: string, enumerator: any) => {
  return enumerator[value as keyof typeof enumerator];
};

const getKeyByStringValue = (value: string, enumerator: any) => {
  return Object.keys(enumerator)[Object.values(enumerator).find((e) => e === value) as number];
};

const getAllValues = (enumerator: any) => {
  return Object.keys(enumerator).map((item) => enumerator[item]);
};

const enumFormater = { getValueByStringKey, getKeyByStringValue, getAllValues };

export default enumFormater;
