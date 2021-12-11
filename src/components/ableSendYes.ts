import axios from 'axios';
import $router from '../router/index';

let nextPage = false;

const sendPage = () => {
    axios.get('/ableSendYes')
    .then((response) => {
        //console.log(response.data);
        nextPage = response.data;

        if(nextPage) {
            $router.push('/extraHome');
        }

    })
    .catch((error) => {
        console.log(error);
    })
}
                
export {nextPage, sendPage}          