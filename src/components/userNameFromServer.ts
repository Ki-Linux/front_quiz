import axios from 'axios';

let showNameFromServer = "";

//const sendUserName = () => {
    axios.defaults.baseURL = "http://localhost:3000";

    axios.get('/getUserNameWithiykrnmltpoebrlmknebwr34t35reefwefWEFYUMm4te')
    .then((response) => {
         showNameFromServer = response.data;
         console.log(showNameFromServer);
    })
    .catch((err) => {
       console.log(err);
    })
//}
                
export { showNameFromServer }  