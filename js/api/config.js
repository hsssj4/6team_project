const API_BASE_URL = "https://upbeat.io.kr";

// 토큰 관련 함수들
const getToken = () => localStorage.getItem("token");
const setToken = (token) => localStorage.setItem("token", token);
const removeToken = () => localStorage.removeItem("token");

// API 요청 기본 설정
const createHeaders = () => {
  const headers = {
    "Content-Type": "application/json",
  };

  const token = getToken();
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  return headers;
};

export { API_BASE_URL, getToken, setToken, removeToken, createHeaders };
