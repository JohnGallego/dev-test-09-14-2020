export const utiliyCreateImg = (imgUrl) => {
  const extension = imgUrl.substring(imgUrl.lastIndexOf('.') + 1, imgUrl.length) || '';
  const imgUrlNoExt = imgUrl.substring(0, imgUrl.lastIndexOf('.'));
  const img = document.createElement('img'); 
  img.src = imgUrl;
  img.srcset = `${imgUrl} 254w,
                ${imgUrlNoExt}@2x.${extension} 508w,
                ${imgUrlNoExt}@3x.${extension} 762w`;
         
  return img;
};