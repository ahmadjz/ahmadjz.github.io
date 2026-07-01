/// <reference types="astro/client" />

// Fontsource variable packages ship CSS as a side-effect import with no
// bundled type declarations; declare them so `astro check` stays clean.
declare module '@fontsource-variable/geist';
declare module '@fontsource-variable/geist-mono';
