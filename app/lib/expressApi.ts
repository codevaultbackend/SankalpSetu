export type FetchOptions = RequestInit & {
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
    `${process.env.NEXT_PUBLIC_EXPRESS_API_URL}${endpoint}`,
    {
      ...options,
      headers,
      cache: "no-store",
    }
  );

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `API Error ${res.status}`);
  }

  return res.json() as Promise<T>;
}

/* ✅ FOR FILE UPLOADS */
export async function expressFormFetch<T>(
  endpoint: string,
  formData: FormData,
  options: FetchOptions = {}
): Promise<T> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_EXPRESS_API_URL}${endpoint}`,
    {
      method: "POST",
      body: formData,
      cache: "no-store",
      ...options,
      headers: {
        ...options.headers, // ❗ DO NOT set Content-Type
      },
    }
  );

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `API Error ${res.status}`);
  }

  return res.json() as Promise<T>;
}
