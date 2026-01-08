type FetchOptions = RequestInit & {
  auth?: boolean;
};

export async function expressFetch<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  const res = await fetch(
    `${process.env.EXPRESS_API_URL}${endpoint}`,
    {
      ...options,
      headers,
      cache: "no-store", 
    }
  );

  if (!res.ok) {
    throw new Error(`API Error: ${res.status}`);
  }

  return res.json() as Promise<T>;
}
