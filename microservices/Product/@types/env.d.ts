declare namespace NodeJS {
  export interface ProcessEnv {
    PUBLIC_ASSETS_URL: string;

    //Product database
    PRODUCT_DATABASE_USER: stirng;
    PRODUCT_DATABASE_PASSWORD: string;
    PRODUCT_DATABASE_DB: string;
    PRODUCT_DATABASE_PORT: number;
    PRODUCT_DATABASE_LOCALHOST_PORT: number;
    PRODUCT_DATABASE_HOST: string;
  }
}
