import { faker } from '@faker-js/faker'

export function fakerUser() {
  return {
    uuid: faker.string.uuid(),
    name: faker.person.fullName(),
    age: faker.number.int({ min: 24, max: 60 }),
    gender: faker.person.sexType(),
    birthday: faker.date.birthdate({ mode: 'age', min: 18, max: 65 }),
    phone: faker.phone.number({ style: 'international' }),
    email: faker.internet.email(),
    address: faker.location.city(),
    avatar: faker.image.avatar(),
    color: faker.color.rgb({ casing: 'upper' }),
    cron: faker.system.cron(),
    version: faker.system.semver(),
    money: faker.number.float({ fractionDigits: 2 })
  }
}

export const userList = faker.helpers.multiple(fakerUser, {
  count: 42
})

export default faker


