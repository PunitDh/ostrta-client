export const getId = (id) => ({
  row: id?.match(/\d+/g)[0],
  column: id?.match(/[A-Z]/g)[0],
  columnCharCode: id?.match(/[A-Z]/g)[0].charCodeAt(0),
});

export const getCellMinMax = (highlighted) => {
  const ids = highlighted.map(getId);
  const columnCharCodes = ids.map((it) => it.columnCharCode);
  const rows = ids.map((it) => Number(it.row));
  const minC = Math.min(...columnCharCodes);
  const maxC = Math.max(...columnCharCodes);
  const minR = Math.min(...rows);
  const maxR = Math.max(...rows);

  return {
    minC,
    maxC,
    minR,
    maxR,
  };
};