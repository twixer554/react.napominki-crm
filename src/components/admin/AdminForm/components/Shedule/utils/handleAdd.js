export default function handleAdd(setList) {
  setList((prev) => [...prev, { days: [], time: '' }])
}
