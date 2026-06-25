declare module '*.webm' {
  const src: string;
  export default src;
}

declare module '*.mp4' {
  const src: string;
  export default src;
}

declare module '*.scss';

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
