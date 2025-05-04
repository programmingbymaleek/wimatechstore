import { api } from "./apiClient";

//get all products..
export const getAllProducts = async () => {
  try {
    const response = await api.get("/getproducts");
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

//get top 10 latestproducts.
export const getTopTenlatestProducts = async () => {
  try {
    const response = await api.get("/latest");
    const top10LatestProducts = response.data;
    console.log(top10LatestProducts);
  } catch (error) {
    console.log(error);
  }
};

//sign up users with credentials. email, username password and confirm password.

//sample data for userInformation.
// {
//   "emailAddress": "test@gmail.com",
//     "userName": "test123",
//     "passsword": "test123",
//     "confirmPassword":"test123"
// }

export const createNewUser = async (userInformation) => {
  try {
    const response = await api.post("/auth/register", userInformation);
    if (response.status == 200) {
      console.log("user was successfully added");
      console.log(response.data);
    }
  } catch (error) {
    console.log("There was an error registering you.");
  }
};
