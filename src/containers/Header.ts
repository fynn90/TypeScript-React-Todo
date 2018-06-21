import React,{Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect, Dispatch  } from 'react-redux';
import HeaderComponent from '../components/Header';
import { addTodo } from '../actions/index';
// class Header extends Component {
//     render () {
//         return (
//             <HeaderComponent 
//             editing={false} 
//             newTodo={true} 
//             onSave={(text) => {
//                 if (text.length !== 0) {
//                     addTodo(text)
//                 }
//             }}></HeaderComponent>
//         )
//     }
// }
const mapStateToProps = () =>{
    return {
        editing: false,
        newTodo: true
    }
}

const mapDispatchToProps = (dispatch: Dispatch) =>{
    return {
        onSave: (text: string) =>{
            dispatch(addTodo(text))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent)