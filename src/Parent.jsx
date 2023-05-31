import react, {useState} from "react";
import Child from "./Child";

const Parent = () => {
 
const [val, setVal] = useState("");

const handleChange = (e) => {
setVal(e.target.value) 
};

return  (
<>
<Child value = {val} handleChange = {handleChange}/>
<h1>{val}</h1>
 </>
);
};

export default Parent;