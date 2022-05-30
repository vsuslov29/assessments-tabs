import { Assessment } from '../types';

export function setAssesments(assesments: Assessment[], type: string) {
  return {
    type,
    payload: assesments
  }
}