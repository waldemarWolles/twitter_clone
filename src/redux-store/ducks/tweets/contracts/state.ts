export enum LoadingState {
  LOADED = 'LOADED',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
}

export enum AddFormState {
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
}

export interface Tweet {
  user: {
    fullname: string
    username: string
    avatarURL: string
  }
  _id: string
  text: string
  date: string
}

export interface TweetsState {
  items: Tweet[]
  loadingState: LoadingState
  addFormState: AddFormState
}
