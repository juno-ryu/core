import { Nullable, Optional } from '@/core/utils/types/selector/flexible';

export type EnumPhotoReviewUploadStatus = (typeof EnumPhotoReviewUploadStatus)[keyof typeof EnumPhotoReviewUploadStatus];
export const EnumPhotoReviewUploadStatus = {
  INPROGRESS: 'inprogress',
  SUCCESS: 'success',
  FAIL: 'fail',
} as const;

export type TypePhotoReviewUploadOptions = {
  initialStructure?: Partial<TypePhotoReviewUploadStructure>;
  image?: any;
  accept?: Array<React.InputHTMLAttributes<HTMLInputElement>['accept']>;
  isUploadOnly?: boolean;
  onStart?: (values: TypePhotoReviewUploadStructure) => void;
  onFinally?: (values: TypePhotoReviewUploadStructure) => void;
  onReset?: (values: TypePhotoReviewUploadStructure) => void;
};

export type TypePhotoReviewUploadStructure = {
  config: Nullable<TypePhotoReviewUploadConfig>;
  status: Nullable<EnumPhotoReviewUploadStatus>;
  percentage: number;
};

export interface TypePhotoReviewUploadConfig extends Omit<any, 'url'> {
  url: Optional<URL>;
}
