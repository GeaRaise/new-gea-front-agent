import { faker } from "@faker-js/faker"
import type { ClientType } from "../../types/clients/index"

function randomDate(start: Date, end: Date) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

// ランダムな1~9の数値を生成
function randomNum(max = 10) {
  return (Math.floor(Math.random() * max) + 1).toString()
}
// ランダムな0~5の数値を生成
function randomNumZero(max = 5) {
  return Math.floor(Math.random() * max).toString()
}

export const data: ClientType[] = Array.from({ length: 100 }, (_, i) => ({
  from_user: null,
  id: i + 1,
  user: {
    id: i + 1,
    username: faker.internet.userName(),
    email: faker.internet.email(),
    is_active: randomNum(),
    is_staff: randomNumZero(),
    ceo_last_name: faker.person.lastName(),
    ceo_first_name: faker.person.firstName(),
    last_login: randomDate(new Date(2000, 0, 1), new Date()),
    date_joined: randomDate(new Date(2000, 0, 1), new Date()),
    partner_registered_number: i + 1,
    profile: {
      id: i + 1,
      last_name: faker.person.lastName(),
      last_name_kana: faker.person.lastName(),
      first_name: faker.person.firstName(),
      first_name_kana: faker.person.firstName(),
      nick_name: faker.internet.userName(),
      gender: faker.person.gender(),
      mobail_tel: faker.phone.number(),
      tel: faker.phone.number(),
      fax: faker.phone.number(),
      birth_date: randomDate(new Date(1950, 0, 1), new Date(2005, 0, 1)),
      image: faker.image.avatar(),
      title: faker.person.jobTitle(),
      title_extra_info: faker.lorem.sentence(),
      desired_contact: faker.internet.email(),
      anonymous_company_name: faker.company.name(),
      anonymous_image: faker.image.business(),
      anonymous_user_name: faker.internet.userName(),
      user: i + 1,
      company: {
        id: i + 1,
        name: faker.company.name(),
        name_kana: faker.company.name(),
        ceo_first_name: faker.person.firstName(),
        ceo_first_name_kana: faker.person.firstName(),
        ceo_last_name: faker.person.lastName(),
        ceo_last_name_kana: faker.person.lastName(),
        yubin: faker.location.zipCode(),
        address: faker.location.streetAddress(),
        address_etc: faker.location.secondaryAddress(),
        business_profession: faker.person.jobType(),
        business_profession_coment: faker.lorem.sentence(),
        business_summary: faker.lorem.paragraph(),
        company_birthday: randomDate(new Date(1900, 0, 1), new Date()),
        company_facebook_url: faker.internet.url(),
        company_twitter_url: faker.internet.url(),
        company_url: faker.internet.url(),
        employ_id: faker.datatype.uuid(),
        offer_request: faker.lorem.sentence(),
        offer_want: faker.lorem.sentence(),
        profile_url: faker.internet.url(),
        support_record: faker.lorem.sentence(),
        support_request: faker.lorem.sentence(),
      },
    },
  },
}))
