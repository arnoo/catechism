export const PUBLIC_FOLDER_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://arnoo.github.io/catechism'
    : window.location.origin
