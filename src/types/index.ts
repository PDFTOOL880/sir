export enum ProcessingType {
  Merge = 'merge',
  Split = 'split',
  Compress = 'compress',
  Convert = 'convert'
}

interface ProcessingSettingsBase {
  type: ProcessingType;
}

interface CompressSettings extends ProcessingSettingsBase {
  type: ProcessingType.Compress;
  quality: number;
}

interface SplitSettings extends ProcessingSettingsBase {
  type: ProcessingType.Split;
  pageRange: string;
}

interface ConvertSettings extends ProcessingSettingsBase {
  type: ProcessingType.Convert;
  outputFormat: string;
  isImageToPdf?: boolean;
}

interface MergeSettings extends ProcessingSettingsBase {
  type: ProcessingType.Merge;
  order: string[];
}

export type ProcessingSettings =
  | CompressSettings
  | SplitSettings
  | ConvertSettings
  | MergeSettings;

export type PDFFile = {
  name: string;
  size: number;
  lastModified: number;
  type: string;
};

export type ProcessingOptions = {
  type: ProcessingType;
  settings: ProcessingSettings;
};

export function isConvertSettings(settings: ProcessingSettings): settings is ConvertSettings {
  return settings.type === ProcessingType.Convert;
}
