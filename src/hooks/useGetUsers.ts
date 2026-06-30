import { User } from "@/types/user";
import axios from "axios";

export const useGetUsers = async (count: number): Promise<User[]> => {
    try {
        const { data } = await axios.get(
            `https://randomuser.me/api/?results=${count}&nat=gb`
        );
        
        return data.results.map((user: any) => ({
            picture: {
                // randomuser.me's "large" is only 128x128, which looks pixelated.
                // We override it with a high-res (500x500) image from pravatar.cc, using their email as a unique seed.
                large: `https://i.pravatar.cc/500?u=${user.email}`
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