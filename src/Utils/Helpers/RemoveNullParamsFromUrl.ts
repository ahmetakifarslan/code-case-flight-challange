export function removeNullParamsFromURL(searchParams: URLSearchParams) {
  searchParams.forEach((value, param) => {
    if (
      value === null ||
      value === undefined ||
      value === "" ||
      value === "0"
    ) {
      searchParams.delete(param);
    }
  });
}
