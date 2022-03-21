export const getFontFamilyList = () => {
  const {fonts} = document;
  const it = fonts.entries();

  const list = [];
  let isDone = false;

  while (!isDone) {
    const font = it.next();
    if (!font.done) {
      list.push(font.value[0].family);
    } else {
      isDone = font.done;
    }
  }

  return [...new Set(list)];
};
