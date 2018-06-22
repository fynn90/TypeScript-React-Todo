
import { connect, Dispatch  } from 'react-redux';
import HeaderComponent from '../components/Header';
import { addTodo } from '../actions/index';
const mapStateToProps = () => {
    return {
        editing: false,
        newTodo: true
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onSave: (text: string) => {
            dispatch(addTodo(text));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);