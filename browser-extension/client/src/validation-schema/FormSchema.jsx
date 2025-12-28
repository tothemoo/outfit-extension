import React from 'react'
import * as yup from "yup"

const FormSchema = yup.object({
    itemName: yup.string().required("Item name is required"),
    quantity: yup.number().required("Quantity is required").min(1, "minimum quantity is 1"),
    cost: yup.number().typeError("Only integers are accepted").required("Cost is required").positive("Cost must be positive"),
    link: yup.string().url("Enter a valid link").required("Link is required")
})

export default FormSchema