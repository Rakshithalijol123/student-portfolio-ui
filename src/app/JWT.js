import { baseurl, username, password } from "./configuration";

// export const fetchJwtToken = async () => {
// Fetch JWT token logic
export const fetchJwt = async () => {
  const tokenUrl = baseurl + "/oauth/token";
  const requestBody = new URLSearchParams({
    grant_type: "password",
    username: username,
    password: password,
  });

  const response = await fetch(tokenUrl, {
    method: "POST",
    body: requestBody,
  });

  const data = await response.json();
  const accessToken = data.access_token;
  return accessToken;
};

//
