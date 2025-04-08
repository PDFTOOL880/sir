declare module 'docx-pdf' {
    export function convert(inputPath: string, outputPath: string): Promise<void>;
}