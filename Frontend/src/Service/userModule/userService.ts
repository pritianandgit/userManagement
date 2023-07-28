import BaseService from '../baseService';
import UserInterface from '../../Interfaces/userModule/userInterface'

export default class UserService extends BaseService {


    async createUserData(userDetails: UserInterface): Promise<UserInterface | any> {
        const data: any = {
            name: userDetails.name,
            email: userDetails.email,
            password: userDetails.password,
            phoneNumber: userDetails.phoneNumber,
            userType: userDetails.userType,
            status: userDetails.status
        };

        const response = await this.post(`http://localhost:8400/api/v1/users`, data);
        if (response && response?.data) {
            if (response.data?.error) {
                const error = response.data?.error;
                return error;
            }
            else {
                const data = response?.data;
                return data;
            }
        }
    }

    async getAllUsers(): Promise<UserInterface | null> {
        const response: any = await this.get(`http://localhost:8400/api/v1/user`);
        // console.log(response);
        if (response && response?.data) {
            // console.log(response.data)
            if (response.data?.error) {
                const error = response.data?.error;
                // console.log(response.data.error)
                return error;
            }
            else if (response.data) {
                const data = response.data;
                // console.log(data);
                return data;
            }
        }
        return null;
    }

    async getUserData(id: string): Promise<UserInterface | null> {
        const response: any = await this.get(`http://localhost:8400/api/v1/user/${id}`);
        if (response && response?.data) {
            if (response.data?.error) {
                const error = response.data?.error;
            }
            else if (response?.data) {
                const data = response?.data;
                return data;
            }
        }
        return null;
    }


    async updateUserDetails(userDetails: UserInterface): Promise<UserInterface | null> {
        const data: any = {
            id: userDetails.id,
            name: userDetails.name,
            email: userDetails.email,
            password: userDetails.password,
            phoneNumber: userDetails.phoneNumber,
            userType: userDetails.userType,
            status: userDetails.status
        };
        const response = await this.put(`http://localhost:8400/api/v1/user/${userDetails.id}`, data);
        console.log(response, "responseee");
        if (response && response?.data) {
            if (response.data?.error) {
                const error = response.data?.error;
                return error;
            }
            else if (response?.data) {
                const data = response?.data;
                return data;
            }
        }
        return null;
    }



}



