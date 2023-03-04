const ReducerQ1List = ({ ingredients, onClickRemove }) => {
    return (
        <tbody>
            {ingredients.map((ingredient) => (
                <tr>
                    <td>{ingredient.name}</td>
                    <td>{ingredient.price}</td>
                    <td>
                        <button onClick={() => onClickRemove(ingredient.id)}>
                            삭제
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    );
};
export default ReducerQ1List;
