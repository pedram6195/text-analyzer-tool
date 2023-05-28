export enum ActionTypes {
  UPDATE_WORDS = 'UPDATE_WORDS',
  UPDATE_CHARACTERS = 'UPDATE_CHARACTERS',
  UPDATE_SENTENCES = 'UPDATE_SENTENCES',
  UPDATE_PARAGRAPHS = 'UPDATE_PARAGRAPHS',
  UPDATE_PRONOUNS = 'UPDATE_PRONOUNS',
  UPDATE_ART = 'UPDATE_ART',
  UPDATE_LONGEST_WORD = 'UPDATE_LONGEST_WORD',
}

export interface UpdateAction {
  type: ActionTypes
  payload: number | string
}

export interface initialStateType {
  words: number
  characters: number
  sentences: number
  paragraphs: number
  pronouns: number
  averageReadingTime: string
  longestWord: string
}

export const initialState = {
  words: 0,
  characters: 0,
  sentences: 0,
  paragraphs: 0,
  pronouns: 0,
  averageReadingTime: '-',
  longestWord: '-',
}

export const statsReducer = (state: initialStateType, action: UpdateAction) => {
  const { type, payload } = action
  switch (type) {
    case ActionTypes.UPDATE_WORDS:
      return {
        ...state,
        words: payload as number,
      }
    case ActionTypes.UPDATE_CHARACTERS:
      return {
        ...state,
        characters: payload as number,
      }
    case ActionTypes.UPDATE_SENTENCES:
      return {
        ...state,
        sentences: payload as number,
      }
    case ActionTypes.UPDATE_PARAGRAPHS:
      return {
        ...state,
        paragraphs: payload as number,
      }
    case ActionTypes.UPDATE_PRONOUNS:
      return {
        ...state,
        pronouns: payload as number,
      }
    case ActionTypes.UPDATE_ART:
      return {
        ...state,
        averageReadingTime: payload as string,
      }
    case ActionTypes.UPDATE_LONGEST_WORD:
      return {
        ...state,
        longestWord: payload as string,
      }
    default:
      return state
  }
}
