import React from "react";
import InconButton from "../template/iconButton"

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                <InconButton style="success" icon="check" hide={todo.done}
                onClick={() => props.handleMarkAsDone(todo)}></InconButton>
                <InconButton style="warning" icon="undo" hide={!todo.done}
                onClick={() => props.handleMarkAsPending(todo)}></InconButton>
                    <InconButton style="danger" icon="trash-o" hide={!todo.done}
                    onClick={() => props.handleRemove(todo)}></InconButton>
                </td>
            </tr>
        ))
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className="tableActions">Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}