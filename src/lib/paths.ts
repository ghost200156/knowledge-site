export function withBase(path: string) {
  const rawBase = import.meta.env.BASE_URL;
  const base = rawBase.endsWith("/") ? rawBase : `${rawBase}/`;
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  return `${base}${cleanPath}`;
}
