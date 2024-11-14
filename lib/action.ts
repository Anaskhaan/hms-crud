import { z } from "zod";

const EmployeeSchema = z.object({
    name:z.string().min(6 , {message : "Minimum length is 6"}),
    email:z.string().min(6 , {message : "Minimum length is 6"}),
    phone:z.string().min(11 , {message : "Minimum length is 11  "})
});

export const saveEmployees  = async (prevState : unknown , formData:FormData) => {
    const validateFields = EmployeeSchema.safeParse(
        Object.fromEntries(formData.entries())
    )

    if(!validateFields.success) {
        return {
            Error :validateFields.error.flatten().fieldErrors
        }
    }
    try {
            console.log("success")
    } catch (error) {
        return {message : "Failed to add new employee" , error}
    }
}
