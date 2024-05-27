/**
 * ユーザータイプ
 */
export type UserType = {
  /** ID */
  id: number;
  /** ユーザー名 */
  username: string;
  /** メールアドレス */
  email: string;
  /** 承認状況 */
  is_active?: string;
  /** ユーザー種別 */
  is_staff?: string;
  /** 姓 */
  ceo_last_name?: string;
  /** 名 */
  ceo_first_name?: string;
  /** 最終ログイン */
  last_login?: Date | null;
  /** 登録日 */
  date_joined: Date;
  /** パートナー会社毎に付与される登録した順 */
  partner_registered_number?: number;
  /** プロフィール */
  profile: ProfileType;
};

/**
 * プロフィールタイプ
 */
export type ProfileType = {
  /** ID */
  id: number;
  /** * 姓 */
  last_name?: string;
  /** * 姓(カナ) */
  last_name_kana?: string;
  /** * 名 */
  first_name: string;
  /** * 名(カナ) */
  first_name_kana: string;
  /** * ニックネーム */
  nick_name?: string;
  /** * 性別 */
  gender?: string;
  /** * 携帯 */
  mobail_tel?: string;
  /** * 自宅 */
  tel: string;
  /** Fax */
  fax?: string;
  /** 生年月日 */
  birth_date: Date;
  /** プロフィール画像 */
  image: string;
  /** * 役職(肩書き) */
  title?: string;
  /** 役職(補足) */
  title_extra_info?: string;
  /** * 連絡手段 */
  desired_contact: string;
  /** * 会社名匿名設定 */
  anonymous_company_name?: string;
  /** * 画像匿名設定 */
  anonymous_image?: string;
  /** * ユーザー名匿名設定 */
  anonymous_user_name?: string;
  /** ユーザー情報 */
  user?: number | null;
  /** 会社情報 */
  company: CompanyType;
};

/**
 * 会社タイプ
 */
export type CompanyType = {
  /** ID */
  id: number;
  /** * 会社名 */
  name: string;
  /** * 会社名(カナ) */
  name_kana: string;
  /** * 代表者名 */
  ceo_first_name: string;
  /** * 代表者名(カナ) */
  ceo_first_name_kana: string;
  /** * 代表者姓 */
  ceo_last_name: string;
  /** * 代表者姓(カナ) */
  ceo_last_name_kana: string;
  /** * 郵便番号 */
  yubin: string;
  /** * 都道府県市区町村番地 */
  address: string;
  /** * その他ビル名など */
  address_etc?: string;
  /** * 職業 */
  business_profession?: string;
  /** * 職業_自由記述欄 */
  business_profession_coment?: string;
  /** * 事業概要・業務内容 */
  business_summary: string;
  /** * 創業年月 */
  company_birthday?: Date | null;
  /** * 会社FaceBookURL */
  company_facebook_url?: string;
  /** * 会社TwitterURL */
  company_twitter_url?: string;
  /** * 会社URL */
  company_url?: string;
  /** * 従業員id */
  employ_id?: string;
  /** * 提供したいサポート */
  offer_request?: string;
  /** * 求めいているオファー(サイト利用目的) */
  offer_want: string;
  /** * プロフィールURL */
  profile_url?: string;
  /** * 過去のサポート実績・事例紹介 */
  support_record?: string;
  /** * 依頼したいサポート */
  support_request?: string;
};
