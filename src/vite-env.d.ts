interface ImportMetaEnv {
  readonly VITE_CURRENCY_API_KEY: string;
  // Добавьте здесь другие переменные окружения при необходимости
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}