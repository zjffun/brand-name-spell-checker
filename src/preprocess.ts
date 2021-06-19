export default (str: string): string => {
  return str.toLocaleLowerCase().replace(/-_./g, "");
};
