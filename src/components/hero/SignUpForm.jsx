'use client'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Separator } from '../ui/separator'

export default function SignupForm() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Submitted email:', email)
  }

  return (
    <div className="p-6 bg-[#410ba7] rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-white ">Sign up for free</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input 
          type="email" 
          placeholder="Email address" 
          className="bg-[#252837] border-gray-700 text-white" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="submit" className="w-full bg-[#0c7e4e] hover:bg-[#00b368] text-white">
          Start earning now
        </Button>
      </form>
      <div className="my-4 text-center text-gray-400">OR</div>
      <Separator className="my-4 text-gray-400" />
      <Button variant="outline" className="w-full bg-red-500 text-white hover:bg-red-700 mb-4">
        <FcGoogle className="w-5 h-5 mr-2" />
        Sign Up with Google
      </Button>
      <Button variant="outline" className="w-full bg-blue-600 text-white hover:bg-blue-700">
        <FaFacebook className="w-5 h-5 mr-2" /> 
        Sign Up with Facebook
      </Button>
      <p className="text-gray-400 text-sm mt-4">
        1264+ sign ups in the past 24 hours
      </p>
    </div>
  )
}