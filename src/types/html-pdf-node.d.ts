declare module 'html-pdf-node' {
  interface Options {
    format?: string;
    path?: string;
    width?: string | number;
    height?: string | number;
    printBackground?: boolean;
    margin?: {
      top?: number;
      right?: number;
      bottom?: number;
      left?: number;
    };
  }

  interface File {
    content: string;
    url?: string;
  }

  export function generatePdf(file: File, options?: Options): Promise<Buffer>;
  export function generatePdfs(files: File[], options?: Options): Promise<Buffer[]>;
}