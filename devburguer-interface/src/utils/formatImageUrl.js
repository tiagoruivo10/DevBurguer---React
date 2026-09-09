export function formatImageUrl(url) {
  if (!url) return '';

  const apiUrl = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '');

  // Se a URL gravada for do localhost antigo e tivermos uma API em produção, ajusta dinamicamente
  if (url.includes('localhost:3001') && apiUrl && apiUrl.startsWith('http')) {
    return url.replace('http://localhost:3001', apiUrl);
  }

  return url;
}
