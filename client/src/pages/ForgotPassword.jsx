import axios from 'axios';
import  { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const REACT_APP_API = "http://localhost:5000";


const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [secretQuestion, setSecretQuestion] = useState('');



  const navigateTo = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle form submission logic here, such as sending data to the server
    // console.log('Form submitted:', { email, newPassword, secretQuestion });

    try{
        const res = await axios.post(`${REACT_APP_API}/auth/forgotpassword`, {
            email:email,newPassword:newPassword,secretQuestion:secretQuestion
          });

          console.log(res.data)


          setEmail("")
          setNewPassword("")
          setSecretQuestion("")

          if (res.status) {
            toast.success("Password changed Successfully");
            navigateTo("/login")
            console.log(res.data.user)
          } else toast.error("Invalid Credentials -- try");

    }
    catch(e){
        toast.error("Invalid Credentials");
    }



  };

  return (
    <div className="bg-white h-[78.8vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 text-indigo-800">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-indigo-800">
            Forgot Password
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-indigo-800  font-medium mb-1 text-lg">
              Email
            </label>
            <input
              type="email"
              className="w-full rounded-md bg-white border-2 border-indigo-700 text-indigo-800 outline-none  placeholder:text-indigo-700 py-2 px-4"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-indigo-800  font-medium mb-1 text-lg">
              New Password
            </label>
            <input
              type="password"
              className="w-full rounded-md bg-white border-2 border-indigo-700 text-indigo-800 outline-none placeholder:text-indigo-700  py-2 px-4"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-indigo-800  font-medium mb-1 text-lg">
              Secret Question
            </label>
            <input
              type="text"
              className="w-full rounded-md bg-white border-2 border-indigo-700 text-indigo-800 outline-none placeholder:text-indigo-700 py-2 px-4"
              placeholder="Enter secret question"
              value={secretQuestion}
              onChange={(e) => setSecretQuestion(e.target.value)}
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
