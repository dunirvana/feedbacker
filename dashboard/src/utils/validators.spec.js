import {
  validateEmptyAndEmail,
  validateEmptyAndLength3
} from './validators'

describe('Validators utils', () => {
  it('should give an error with ampty payload', () => {
    expect(validateEmptyAndLength3()).toBe('*Este campo é obrigatório')
  })

  it('should give an error with less then 3 character payload', () => {
    expect(validateEmptyAndLength3('12')).toBe('*Este campo precisa de no minino 3 caracteres')
  })  

  it('should returns true when input pass a correct param', () => {
    expect(validateEmptyAndLength3('12345')).toBe(true)
  })  

  it('should give an error with ampty payload', () => {
    expect(validateEmptyAndEmail()).toBe('*Este campo é obrigatório')
  })

  it('should give an error with less invalid param', () => {
    expect(validateEmptyAndEmail('myemail@')).toBe('*Este campo precisa ser um e-mail')
  })  

  it('should returns true when input be a correct param', () => {
    expect(validateEmptyAndEmail('myemail@mail.com')).toBe(true)
  })    
})