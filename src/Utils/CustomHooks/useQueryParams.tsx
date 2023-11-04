import { useLocation } from "react-router-dom";

interface QueryParams {
  from: string | null;
  to: string | null;
  passengerCount: string | null;
  fareCategory: string | null;
  location: ReturnType<typeof useLocation>;
  searchParams: URLSearchParams;
}

function useQueryParams(): QueryParams {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const passengerCount = searchParams.get("passengerCount");
  const fareCategory = searchParams.get("fareCategory");

  return {
    from,
    to,
    passengerCount,
    fareCategory,
    location,
    searchParams,
  };
}

export default useQueryParams;
