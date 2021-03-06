import axios from 'axios'

const CSRF_COOKIE_NAME = "csrftoken";
const CSRF_HEADER_NAME = "X-CSRFToken";

const session = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  xsrfCookieName: CSRF_COOKIE_NAME,
  xsrfHeaderName: CSRF_HEADER_NAME
});

export default session;
