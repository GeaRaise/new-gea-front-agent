/**
 * AgentAdvisor
 */
export type AgentUserType = {
  from_user?: number | null;
  id: number;
  user: UserType;
};

/**
 * Agent
 */
export type UserType = {
  date_joined: Date;
  /**
   * Email address
   */
  email: string;
  /**
   * 名
   */
  ceo_first_name?: string;
  id: number;
  /**
   * 承認状況
   */
  is_active?: string;
  /**
   * ユーザー種別
   */
  is_staff?: string;
  /**
   * 最終ログイン
   */
  last_login?: Date | null;
  /**
   * 姓
   */
  ceo_last_name?: string;
  /**
   * パートナー会社毎に付与される登録した順
   */
  partner_registered_number?: number;
  profile: ProfileType;
  username: string;
};

/**
 * ProfileCompany
 */
export type ProfileType = {
  /**
   * 会社名匿名設定
   */
  anonymous_company_name?: string;
  /**
   * 画像匿名設定
   */
  anonymous_image?: string;
  /**
   * ユーザー名匿名設定
   */
  anonymous_user_name?: string;
  birth_date: Date;
  company: CompanyType;
  /**
   * 連絡手段
   */
  desired_contact: string;
  fax?: string;
  /**
   * 名
   */
  first_name: string;
  /**
   * 名(カナ)
   */
  first_name_kana: string;
  /**
   * 性別
   */
  gender?: string;
  id: number;
  image: string;
  /**
   * 姓
   */
  last_name?: string;
  /**
   * 姓(カナ)
   */
  last_name_kana?: string;
  /**
   * 携帯
   */
  mobail_tel?: string;
  /**
   * ニックネーム
   */
  nick_name?: string;
  /**
   * 自宅
   */
  tel: string;
  /**
   * 役職(肩書き)
   */
  title?: string;
  title_extra_info?: string;
  user?: number | null;
};

/**
 * CompanyDetail
 */
export type CompanyType = {
  /**
   * 都道府県市区町村番地
   */
  address: string;
  /**
   * その他ビル名など
   */
  address_etc?: string;
  /**
   * 職業
   */
  business_profession?: string;
  /**
   * 職業_自由記述欄
   */
  business_profession_coment?: string;
  /**
   * 事業概要・業務内容
   */
  business_summary: string;
  /**
   * 代表者名
   */
  ceo_first_name: string;
  /**
   * 代表者名(カナ)
   */
  ceo_first_name_kana: string;
  /**
   * 代表者姓
   */
  ceo_last_name: string;
  /**
   * 代表者姓(カナ)
   */
  ceo_last_name_kana: string;
  /**
   * 創業年月
   */
  company_birthday?: Date | null;
  /**
   * 会社FaceBookURL
   */
  company_facebook_url?: string;
  /**
   * 会社TwitterURL
   */
  company_twitter_url?: string;
  /**
   * 会社URL
   */
  company_url?: string;
  /**
   * 従業員id
   */
  employ_id?: string;
  id: number;
  /**
   * 会社名
   */
  name: string;
  /**
   * 会社名(カナ)
   */
  name_kana: string;
  /**
   * 提供したいサポート
   */
  offer_request?: string;
  /**
   * 求めいているオファー(サイト利用目的)
   */
  offer_want: string;
  /**
   * プロフィールURL
   */
  profile_url?: string;
  /**
   * 過去のサポート実績・事例紹介
   */
  support_record?: string;
  /**
   * 依頼したいサポート
   */
  support_request?: string;
  /**
   * 郵便番号
   */
  yubin: string;
};
