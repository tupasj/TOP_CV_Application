const H1Editable = (props) => {
    const onSumbit = props.onSubmit;
    const text = props.text;
    const onH1Edit = props.onH1Edit;

    return (
        <form onSubmit={onSumbit}>
            <input type="text" defaultValue={text} onChange={onH1Edit}></input>
        </form>
    )
}

export default H1Editable;