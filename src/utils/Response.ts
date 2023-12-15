interface IApiResponse<T> {
    message: string;
    data: T | null;
    status: 'success' | 'error';
}

class ApiResponse {
    public static createApiResponse<T>(message: string, data: T | null, status: 'success' | 'error'): IApiResponse<T> {
        return {
            message,
            data,
            status
        };
    }
}

export default ApiResponse;

// function createApiResponse<T>(message: string, data: T | null, status: 'success' | 'error'): ApiResponse<T> {
//     return {
//         message,
//         data,
//         status
//     };
// }