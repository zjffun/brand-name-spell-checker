export default (str: string): string => {
  return str.toLocaleLowerCase().replace(/[^A-Za-z0-9]/g, "");
};
