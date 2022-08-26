export const TableHelpers = {
  getPageCount,
  tableLength: 10,
}

function getPageCount(values: unknown[]): number {
  return Math.ceil(values.length / 10)
}
