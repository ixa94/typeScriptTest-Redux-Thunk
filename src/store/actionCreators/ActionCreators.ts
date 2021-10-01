import * as UserActionCreators from './ActionCreatorsUser'
import * as TodoActionCreators from './ActionCreatorsTodo'


export default{
  ...TodoActionCreators,
  ...UserActionCreators
}
