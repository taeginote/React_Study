const Q1Form = ({ onClickAdd }) => {
    return (
        <form onSubmit={onClickAdd}>
            <label>
                <input type="text" name="name" placeholder="재료" />
            </label>
            <label>
                <input type="number" name="price" placeholder="가격" />
            </label>
            <button type="submit">추가</button>
        </form>
    );
};
export default Q1Form;
