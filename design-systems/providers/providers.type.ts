import { LanguageCode } from '@/core/shared/service/enum/language-code';

// 임시 타입 별칭
type EnumLanguageCode = LanguageCode;

export interface RootStyleCacheProps extends React.PropsWithChildren {
  //
}

export interface ThemeProviderProps extends React.PropsWithChildren {
  lang: EnumLanguageCode;
}

export interface NotistackProviderProps extends React.PropsWithChildren {
  //
}
