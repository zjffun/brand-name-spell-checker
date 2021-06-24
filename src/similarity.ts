export default (str1: string, str2: string): number => {
  let seam = 0;
  seam -= str2.length - str1.length;
  return seam;
};
