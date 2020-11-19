import { Permission } from '@/models/Permission';
import axios from 'axios';

export default class PermissionApi {
    // TODO: mapping from api model to frontend model
    public static async savePermission(data: Permission) {
        return await axios.post(`${process.env.VUE_APP_API_URL}/permission`, data);
    }

    public static async getPermissions() {
        return await axios.get(`${process.env.VUE_APP_API_URL}/permission/all`);
    }

    public static async getPermissionDetail(id: number): Promise<any> {
        return await axios.get(`${process.env.VUE_APP_API_URL}/permission/${id}`);
    }

    public static async editPermissions(data: Permission) {
        return await axios.patch(`${process.env.VUE_APP_API_URL}/permission/${data.id}`);
    }
    public static async deletePermission(id: number) {
        return await axios.delete(`${process.env.VUE_APP_API_URL}/permission/${id}`);
    }
}