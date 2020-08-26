import { USER_PHOTO_UPDATE } from "./../../services/EndPoints";
import { decode } from "jsonwebtoken";
import Axios from "axios";

export const fileUpload = async (file, token, id) => {
  const username = decode(token);
  const formData = new FormData();
  formData.append("photo", file);
  formData.append("username", username.user_name);
  try {
    const resp = await Axios.post(`${USER_PHOTO_UPDATE}${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + token,
      },
    }).then((response) => {
      if (response.ok) {
        console.log("response");
      } else {
        console.log(response);
      }
    });
  } catch (error) {
    throw error;
  }
};
