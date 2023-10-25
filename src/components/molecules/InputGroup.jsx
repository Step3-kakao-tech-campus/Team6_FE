import Input from "../atoms/Input";

const InputGroup = ({ label, name, value, onChange, constraints, type }) => {
    return (
        <div className="input-group">
        <label htmlFor={name} className={"font-semibold text-lg"}>{label}</label>
            <Input name={name} value={value} onChange={onChange} className={"account-input"} type={type} />
        </div>
    );
}

export default InputGroup;