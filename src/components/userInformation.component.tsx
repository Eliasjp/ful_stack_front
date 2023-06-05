import { ClientReturnData } from "@/schema/client.schema";

export function UserInfo ({full_name, email, phone}: ClientReturnData){

    return (
        <div>
            <h3>{full_name}</h3>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    )
}