import { type FormEvent, useState } from "react";
import { actionCreators } from "../state";
import { useDispatch } from "react-redux";

export const RepositoriesList = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(actionCreators.searchRepositories(term) as any);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          type="text"
        />
        <button>Search</button>
      </form>
    </div>
  );
};
