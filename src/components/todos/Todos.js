import { useDispatch } from 'react-redux';
import { changeTodoStatus, deleteTodoStatus } from '../../reducers/todos';
import { ReactComponent as CompleteIcon } from '../../assets/images/complete-icon.svg';
import { ReactComponent as DeleteIcon } from '../../assets/images/delete-icon.svg';
import { StyledFilters, StyledIconDiv, StyledTodo } from './Todos.styled';
import useTodos from '../../hooks/useTodos';

function Todos() {
  const dispatch = useDispatch();
  const toggleIsComplete = (todo) => {
    dispatch(changeTodoStatus(todo.id));
  };
  const deleteTodo = (todo) => {
    dispatch(deleteTodoStatus(todo.id));
  };
  // style filters
  // add animations
  const { sortedTodos, currFilters, setCurrFilters } = useTodos();

  const showCompleted = (e) => {
    e.preventDefault();
    setCurrFilters({ ...currFilters, status: 'Completed' });
  };
  const showNotCompleted = (e) => {
    e.preventDefault();
    setCurrFilters({ ...currFilters, status: 'Not Completed' });
  };
  const showFailed = (e) => {
    e.preventDefault();
    setCurrFilters({ ...currFilters, status: 'Failed' });
  };
  const showAll = (e) => {
    e.preventDefault();
    setCurrFilters({ ...currFilters, status: 'All' });
  };
  const togglePriorityDirection = (e) => {
    e.preventDefault();
    if (currFilters.filter === 'Priority:A-Z') {
      setCurrFilters({ ...currFilters, filter: 'Priority:Z-A' });
    } else {
      setCurrFilters({ ...currFilters, filter: 'Priority:A-Z' });
    }
  };
  const toggleDueDateDirection = (e) => {
    e.preventDefault();
    if (currFilters.filter === 'DueDate:A-Z') {
      setCurrFilters({ ...currFilters, filter: 'DueDate:Z-A' });
    } else {
      setCurrFilters({ ...currFilters, filter: 'DueDate:A-Z' });
    }
  };

  return (
    <div>
      <StyledFilters>
        <div>
          <input
            type="button"
            onClick={showNotCompleted}
            value="Not Completed"
          />
          <input type="button" onClick={showCompleted} value="Completed" />
          <input type="button" onClick={showFailed} value="Failed" />
          <input type="button" onClick={showAll} value="All" />
        </div>
        <div>
          <input
            type="button"
            onClick={togglePriorityDirection}
            value="Priority"
          />
          <input
            type="button"
            onClick={toggleDueDateDirection}
            value="Due date"
          />
        </div>
      </StyledFilters>
      {sortedTodos &&
        sortedTodos.map((todo) => (
          <StyledTodo key={todo.id} isCompleted={todo.isCompleted}>
            <span>{todo.content}</span>
            <div>
              <div>
                <span>{todo.priority}</span>
                <span>{todo.dueDate}</span>
              </div>
              <div>
                <StyledIconDiv
                  onClick={() => {
                    toggleIsComplete(todo);
                  }}
                >
                  <CompleteIcon />
                </StyledIconDiv>
                <StyledIconDiv
                  onClick={(e) => {
                    e.preventDefault();
                    deleteTodo(todo);
                  }}
                >
                  <DeleteIcon />
                </StyledIconDiv>
              </div>
            </div>
          </StyledTodo>
        ))}
    </div>
  );
}

export default Todos;
