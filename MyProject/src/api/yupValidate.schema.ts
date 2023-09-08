import * as Yup from "yup";

export const siginSchema = Yup.object({
  name: Yup.string()
    .min(6)
    .required("trường dữ liệu name , ít nhất 6 kí tự")
    .trim(),
  password: Yup.string()
    .min(6)
    .required("trường dữ liệu password , ít nhất 6 kí tự")
    .trim(),
  confirmPassword: Yup.string()
    .min(6)
    .required("trường dữ liệu password , ít nhất 6 kí tự")
    .trim()
    .oneOf([Yup.ref("password")], "mật khẩu không khớp"),
});
export type SignupForm = Yup.InferType<typeof siginSchema>;
