import React, {useState} from "react";

const Form = () => {
    const [formData, setformData] = useState(
        {
            firstName:"",
            lastName:"",
            email:"",
            comments:"",
            isFriendly:false,
            employment:"",
            favColor:""
        });
    function handleChange(e) {
        const {name, value, checked, type} = e.target;
        setformData((prev) => {
            return {
                ...prev,
                [name] : type === "checkbox" ? checked : value
            }
        })
    }
    
    
    function handleSubmit(e){
        e.preventDefault();
        console.log(formData);
    }
    function formResetBtn(){
        // document.getElementsByTagName("form").reset()
    }
    
    return (
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col">
                        <input 
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            placeholder="FirstName"
                            onChange={handleChange}
                        />
                        <input 
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            placeholder="lastName"
                            onChange={handleChange}
                        />
                        <input 
                            type="text"
                            name="email"
                            value={formData.email}
                            placeholder="email"
                            onChange={handleChange}
                        />
                        <input 
                            type="checkbox"
                            name="isFriendly"
                            checked={formData.isFriendly}
                            id="isFriendly"
                            onChange={handleChange}
                        />
                        <label htmlFor="isFriendly">Are you friendly</label>
                        <fieldset>
                            <legend>Current employment status</legend>
                            <input 
                                type="radio"
                                name="employment"
                                checked={formData.employment === "unemployed"}
                                value="unemployed"
                                id="unemployed"
                                onChange={handleChange}
                            />
                            <label htmlFor="unemployed">Unemployed</label><br />
                            <input 
                                type="radio"
                                name="employment"
                                checked={formData.employment === "part-time"}
                                value="part-time"
                                id="part-time"
                                onChange={handleChange}
                            />
                            <label htmlFor="part-time">Part-time</label><br />
                            <input 
                                type="radio"
                                name="employment"
                                checked={formData.employment === "full-time"}
                                value="full-time"
                                id="full-time"
                                onChange={handleChange}
                            />
                            <label htmlFor="full-time">Full-time</label>
                        </fieldset>
                    </div>
                    <div className="col">
                        <textarea 
                            name="comments"
                            value={formData.comments}
                            placeholder="comments..."
                            onChange={handleChange}
                        />
                        <div className="select">
                            <label htmlFor="favColor">What's your favorite color ?</label><br/>
                            <select
                                id="favColor"
                                name="favColor"
                                value={formData.favColor}
                                onChange={handleChange}
                            >
                                <option value="">--Choose--</option>
                                <option value="red">Red</option>
                                <option value="orange">orange</option>
                                <option value="yellow">Yellow</option>
                                <option value="green">Green</option>
                                <option value="blue">blue</option>
                                <option value="indigo">Indigo</option>
                                <option value="purple">Purple</option>
                            </select>
                        </div>
                        <button>Submit</button><button onClick={formResetBtn}>Reset</button>
                    </div>
                </div>
            </form>
    )
}
export default Form