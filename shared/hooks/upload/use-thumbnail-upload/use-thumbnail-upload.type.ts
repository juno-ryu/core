import { Nullable } from '@/core/utils/types/selector/flexible';

export type EnumThumbnailUploadStatus = (typeof EnumThumbnailUploadStatus)[keyof typeof EnumThumbnailUploadStatus];
export const EnumThumbnailUploadStatus = {
  INPROGRESS: 'inprogress',
  SUCCESS: 'success',
  FAIL: 'fail',
} as const;

export type TypeThumbnailUploadOptions = {
  initialStructure?: Partial<TypeThumbnailUploadStructure>;
  image?: any;
  accept?: Array<React.InputHTMLAttributes<HTMLInputElement>['accept']>;
  onStart?: (values: TypeThumbnailUploadStructure) => void;
  onFinally?: (values: TypeThumbnailUploadStructure) => void;
  onReset?: (values: TypeThumbnailUploadStructure) => void;
};

export type TypeThumbnailUploadStructure = {
  config: TypeThumbnailUploadConfig;
  status: Nullable<EnumThumbnailUploadStatus>;
  percentage: number;
};

export interface TypeThumbnailUploadConfig {
  id?: Nullable<string>;
  clientname: Nullable<string>;
  size: number;
  mime: Nullable<string>;
  fileKey: Nullable<string>;
  // width?: number;
  // height?: number;
  isMain?: boolean;
}
