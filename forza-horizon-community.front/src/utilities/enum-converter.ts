const convertTo = (value: string, enumerator: any) => {
  return enumerator[value as keyof typeof enumerator];
};

const enumConverter = { convertTo };

export default enumConverter;
