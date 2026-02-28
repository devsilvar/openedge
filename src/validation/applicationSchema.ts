import * as Yup from "yup";

export const applicationSchema = Yup.object({
  fullName: Yup.string().required("Full name is required"),
  phoneNumber: Yup.string().required("Phone number is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  currentCity: Yup.string().required("City is required"),
  targetRole: Yup.string().required("Target role is required"),
  currentSituation: Yup.string().required("Required"),
  yearsExperience: Yup.string().required("Required"),
  hospitalityBusinessTypes: Yup.array().min(1, "Select at least one"),
  workApproach: Yup.string().required("Select one option"),
  supervisionExperience: Yup.string().required("Required"),
  biggestProblem: Yup.string().required("Required"),
  commitSchedule: Yup.string().required("Required"),
  deploymentWillingness: Yup.string().required("Required"),
  whyJoinOpenEdge: Yup.string().required("Required"),
  lookingFor: Yup.string().required("Required"),
  accountability: Yup.string().required("Required"),
});
