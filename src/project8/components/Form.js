import React, {useState} from "react";
const Form = () => {
    const [formData, setformData] = useState({
        account:"",
        password:"",
        passwordConfirm:"",
        join:false
    });
    function handleChange(e) {
        setformData(prev => {
            const {name, value, checked, type} = e.target;
            return {
                ...prev,
                [name]:type === "checkbox" ? checked : value
            }
        })
    }
    function handleSubmit(e) {
        e.preventDefault();
        if(formData.password === formData.passwordConfirm){
            console.log("Successfilly signed up")
        }else{
            console.log("passwords do not match")
            return
        }
        if(formData.join === true){
            console.log("Thanks for signing up for newsletter")
        }
    }
    return(
        <form className="form-p8" onSubmit={handleSubmit}>
            <label htmlFor="account"></label>
            <input 
                type="text"
                name="account"
                value={formData.account}
                id="account"
                placeholder="Account"
                onChange={handleChange}
            />
            <label htmlFor="password"></label>
            <input 
                type="text"
                name="password"
                value={formData.password}
                id="password"
                placeholder="Password"
                onChange={handleChange}
            />
            <label htmlFor="passwordConfirm"></label>
            <input 
                type="text"
                name="passwordConfirm"
                value={formData.passwordConfirm}
                id="passwordConfirm"
                placeholder="Confirmpassword"
                onChange={handleChange}
            />
            <div className="checkboxAndLabel">
                <input 
                    type="checkbox"
                    name="join"
                    checked={formData.join}
                    id="join"
                    onChange={handleChange}
                />
                <label htmlFor="join">I want to join the newsletter</label>
            </div>
            <button>Sign Up</button>
        </form>
    )
}
export default Form