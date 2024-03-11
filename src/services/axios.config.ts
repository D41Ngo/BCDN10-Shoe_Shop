// Tạo ra một instance axios
// BASE_URL

import { BASE_URL } from "@/constants";
import axios from "axios";

// -- Call Api: public
export const axiosWithoutAuth = axios.create({
    baseURL: `${BASE_URL}/api`,

    // Đợi phản hồi của một Api -> giới hạn 3p
    timeout: 180_000,
});

export const axiosWithAuth = axios.create({});

// class _axios {
//     constructor(...rest: any) {}
//     static init(...rest: any) {
//         return new _axios(...rest);
//     }

//     static create(...rest: any) {
//         return new _axios(...rest);
//     }
// }
