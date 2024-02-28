export async function getBooks() {
  const dataJson = await fetch("./books.json");
  const data = await dataJson.json();
  return data.books;
}
