const getImg = (src, alt = 'img') => {
  const img = new Image();
  img.src = src;
  img.alt = alt;
  return img;
};
export default getImg;
