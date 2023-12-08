// eslint-disable-next-line
import * as React from 'react';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate } from "react-router-dom";
import axios from 'axios';
import { useReducer } from 'react';
// import { auth } from '../fire';
// import { createUserWithEmailAndPassword } from 'firebase/auth'

function Signup(){
    // setAuthState,
    // setUser {
    const [email, setEmail] = React.useState('');
    const [name,setName]=React.useState('');
    const [password, setPassword] = React.useState('');

    const navigate=useNavigate();
    const onLogin=()=>{
        navigate("/login");
    }

    const onSignUpHandle=(e)=>{
        if(name && email && password){
            axios.post("http://localhost:8080/api/v2/user/create-user",{
                fname:name,
                femail:email,
                fpassword:password
        }).then((res)=>{
                if(res.data.message==="Signup done"){
                    toast.success(res.data.message);
                    navigate("/login");
                }else{
                    toast.error("User Already Exists");
                }
            });
        }
        else{
            toast.error("Invalid Input");
        }
    };
    // const onSignUpHandle = () => {
    //     if(email !== null && password !== null) {
    //         createUserWithEmailAndPassword(auth, email, password)
    //         .then((user) => {
    //             setUser(user.user.email);
    //             setAuthState('home')
    //         })
    //         .catch((err) => {
    //             alert(err)
    //         })
    //     }
    // }

    return (
        <div className=' w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-white border-2 border-gray-100'>
            <h1 className='text-5xl font-semibold'>Register</h1>
            <p className='font-medium text-lg text-gray-500 mt-4'>Please create your account</p>
            <div className='mt-8'>
                <div className='flex flex-col'>
                        <label className='text-lg font-medium'>Username</label>
                        <input 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                            placeholder="Enter your name"/>
                    </div>
                <div className='flex flex-col'>
                    <label className='text-lg font-medium'>Email</label>
                    <input 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder="Enter your email"/>
                </div>
                <div className='flex flex-col mt-4'>
                    <label className='text-lg font-medium'>Password</label>
                    <input 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder="Enter your email"
                        type={"password"}
                    />
                </div>
               
                <div className='mt-8 flex flex-col gap-y-4'>
                    <button 
                        onClick={onSignUpHandle}
                        className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg'>
                        Register
                    </button>
                </div>
                <div className='mt-8 flex justify-center items-center'>
                    <p className='font-medium text-base'>Already a user?</p>
                    <button onClick={onLogin} className='ml-2 font-medium text-base text-violet-500'>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Signup;