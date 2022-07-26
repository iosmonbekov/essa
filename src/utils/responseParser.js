export default function (data) {
  if (data) return Object.keys(data).map((el) => ({ ...data[el], id: el }));
  return [];
}
