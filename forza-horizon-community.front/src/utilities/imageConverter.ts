const addJpgHeader = (byteArray: string) => {
  return `data:image/jpeg;base64, ${byteArray}`;
};

const imageConverter = { addJpgHeader };

export default imageConverter;
