export function resolveAssetPath(src) {
  if (!src || !src.startsWith('/')) return src

  const base = import.meta.env.BASE_URL || '/'
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base

  return `${normalizedBase}${src}`
}
