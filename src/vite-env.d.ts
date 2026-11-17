/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ROUTER?: "path" | "hash";
  readonly VITE_FORM_ENDPOINT?: string;
  /** Sitenin yayınlandığı adres (derlemede SITE_URL ile verilir). */
  readonly VITE_SITE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "virtual:blog-index" {
  const index: Record<
    string,
    {
      slug: string;
      key: string;
      title: string;
      description: string;
      date: string;
      tags: string[];
      minutes: number;
      file: string;
    }[]
  >;
  export default index;
}
