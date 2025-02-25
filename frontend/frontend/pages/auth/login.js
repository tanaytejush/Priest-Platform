import { useState } from "react";
import API from "../../utils/api";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/authSlice";
import { useRouter } from "next/router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post("/auth/login", { email, password });
      dispatch(setUser(data));
      router.push("/dashboard");
    } catch (error) {
      console.error("Login Failed:", error.response?.data?.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="p-6 bg-white rounded shadow-md w-96" onSubmit={handleLogin}>
        <h2 className="text-xl mb-4">Login</h2>
        <input
          className="w-full p-2 mb-4 border"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full p-2 mb-4 border"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 py-2 w-full">Login</button>
      </form>
    </div>
  );
}
