import { reactive, readonly } from "vue"

export type StoreState = {
  currentComponent: string;
  feedbackType: string;
  message: string;
  apikey: string;
  fingerprint: string;
  currentPage: string;
}

const initialState: StoreState = {
  currentComponent: 'SelectFeedbackType',
  feedbackType: '',
  message: '',
  apikey: '',
  fingerprint: '',
  currentPage: ''
}

const state = reactive<StoreState>({ ...initialState })

export function setCurrentComponent (component: string): void {
  state.currentComponent = component
}

export function setMessage (message: string): void {
  state.message = message
}

export function setFeedbackType (type: string): void {
  state.feedbackType = type
}

export function setCurrentPage (page: string): void {
  state.currentPage = page
}

export function setApiKey (apikey: string): void {
  state.apikey = apikey
}

export function setFingerprint (fingerprint: string): void {
  state.fingerprint = fingerprint
}

export function resetStore (): void {
  setCurrentComponent(initialState.currentComponent)
  setMessage(initialState.message)
  setFeedbackType(initialState.feedbackType)
  setCurrentPage(initialState.currentPage)
  setApiKey(initialState.apikey)
  setFingerprint(initialState.fingerprint)
}

export default readonly(state)