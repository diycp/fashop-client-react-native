import { env } from '../../root';

const ROOT_URL = `${env.domain}/server/`;
export const UploadApi = {
    addImage:{
        url: `${ROOT_URL}upload/addImage`,
        method: 'POST'
    }
}
