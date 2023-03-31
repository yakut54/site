export const pathname = process.env.NODE_ENV === 'production'
  ? '/dist'
  : 'http://localhost:8080'