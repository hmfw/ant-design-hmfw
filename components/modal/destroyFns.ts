// Shared registry of close fns so Modal.destroyAll() can tear every confirm dialog down
const destroyFns: Array<() => void> = []
export default destroyFns
