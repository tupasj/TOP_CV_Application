import SubmitBtn from "./SubmitBtn";

const H2Editable = (props) => {
    const onSumbit = props.onSubmit;
    const text = props.text;
    const onH2Edit = props.onH2Edit;

    return (
        <form onSubmit={onSumbit}>
            <input type="text" defaultValue={text} onChange={onH2Edit}></input>
            
        </form>
    )
}

export default H2Editable;
