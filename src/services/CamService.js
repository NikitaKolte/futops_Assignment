import axios from 'axios';
const CAMERA_API_BASE_URL = "https://s3.us-east-2.amazonaws.com/ftilab.com/api/traffic-counter-cameras.json";
var config = {
    headers: {'Access-Control-Allow-Origin': '*'}
};
class CamService {

    getPictures(){
        return axios.get(CAMERA_API_BASE_URL,config);
    }
}
export default new CamService()

