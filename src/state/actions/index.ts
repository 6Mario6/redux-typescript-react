import { ActionType } from "../actions-types";

export type RepositoriesState = {
  loading: boolean;
  error: string | null;
  data: string[];
};

export type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction;

type SearchRepositoriesAction = {
  type: ActionType.SEARCH_REPOSITORIES;
};
type SearchRepositoriesSuccessAction = {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
};
type SearchRepositoriesErrorAction = {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
};
