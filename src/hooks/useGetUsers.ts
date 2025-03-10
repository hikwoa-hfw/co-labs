import { User } from "@/types/user";
import axios from "axios";

export const useGetUsers = async (count: number): Promise<User[]> => {
    try {
        const { data } = await axios.get(
            `https://randomuser.me/api/?results=${count}&nat=gb`
        );
        
        return data.results.map((user: any) => ({
            picture: {
                large: user.picture.large
            },
            cell: user.cell,
            email: user.email,
            gender: user.gender,
            id: {
                name: user.id.name,
                value: user.id.value
            },
            name: {
                first: user.name.first,
                last: user.name.last,
                title: user.name.title
            }
        }));
    } catch (error) {
        console.error(error);
        throw error;
    }
};