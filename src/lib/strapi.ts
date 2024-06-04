interface Props {
  endpoint: string;
  query?: Record<string, string>;
  wrappedByKey?: string;
  wrappedByList?: boolean;
}

/**
 * Fetches data from the Strapi API
 * @param endpoint - The endpoint to fetch from
 * @param query - The query parameters to add to the url
 * @param wrappedByKey - The key to unwrap the response from
 * @param wrappedByList - If the response is a list, unwrap it
 * @returns
 */
export default async function fetchApi<T>({
  endpoint,
  query,
  wrappedByKey,
  wrappedByList,
}: Props): Promise<T> {
  console.log('Original endpoint:', endpoint);

  if (endpoint.startsWith('/')) {
    endpoint = endpoint.slice(1);
  }

  const baseUrl = import.meta.env.STRAPI_URL || 'http://localhost:1337'; // Default value for development
  const accessToken = import.meta.env.STRAPI_ACCESS_TOKEN; // Ensure this environment variable is set

  console.log('Base URL:', baseUrl);
  console.log('Final endpoint:', endpoint);

  try {
    const url = new URL(`${baseUrl}/api/${endpoint}`);
    console.log('Constructed URL:', url.toString());

    if (query) {
      Object.entries(query).forEach(([key, value]) => {
        url.searchParams.append(key, value);
      });
    }

    const res = await fetch(url.toString(), {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
    }

    let data = await res.json();

    if (wrappedByKey) {
      data = data[wrappedByKey];
    }

    if (wrappedByList) {
      data = data[0];
    }

    return data as T;
  } catch (error) {
    console.error('Error constructing URL or fetching data:', error);
    throw error;
  }
}
