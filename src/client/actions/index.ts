import axios from 'axios';
import { ROOT_URL } from '../constants';

const API_URL = ROOT_URL + '/api';
export const getData = (path: string) => {
    return new Promise((resolve, reject) => {
        axios.get(API_URL + path).then(({ data }) => {
            console.log(data);
            resolve(data);
        });
    });
};