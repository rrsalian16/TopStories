import {AxiosResponse} from 'axios';

export default async function defaultResponse(response: AxiosResponse) {
    console.log(
        '===============ResponseSuccessInterceptor=====================',
    );
    console.log(response);
    console.log('====================================');
    return response;
}
