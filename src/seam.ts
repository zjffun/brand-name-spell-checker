export default (str1, str2) => {
  let seam = 0;
  //   for (let i = 0; i < str2.length; i++) {
  //     if (str2.substring(i).startsWith(str1)) {
  //       seam += 10;
  //     }
  //   }
  seam -= str2.length - str1.length;
  return seam;
};
