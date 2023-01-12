import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  name: Yup.string().min(2, "< 2").max(15, "> 15"),
  email: Yup.string("For example"),
  phone: Yup.string().max(12, "> 12"),
  address: Yup.string().min(2, "< 2").max(30, "> 30"),
});
