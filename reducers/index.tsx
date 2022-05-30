import { 
  SET_EVALUATOR_ASSESSMENTS,
  SET_CREATOR_ASSESSMENTS
} from "../constants";

const initialState = {};

export const assessmentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EVALUATOR_ASSESSMENTS:
      return {
        ...state,
        evaluatorAssessments: action.payload,
      }

    case SET_CREATOR_ASSESSMENTS:
      return {
        ...state,
        creatorAssessments: action.payload,
      }
  
    default:
      return state;
  }
}
