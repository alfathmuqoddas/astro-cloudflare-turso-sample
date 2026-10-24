/// <reference types="astro/client" />

declare namespace App {
  interface Locals {
    runtime: {
      env: {
        TURSO_URL: string;
        TURSO_TOKEN: string;
      };
    };
  }
}
