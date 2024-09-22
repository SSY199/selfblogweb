import { Button, Label, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        // Redirect or handle success
        console.log('Signup successful', data);
      } else {
        console.error('Signup failed:', data);
      }
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center">
        {/* left */}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              DEV
            </span>
            NINJAS
          </Link>
          <p className="text-sm mt-5">
            This is the beginning of creating and publishing{' '}
            <span className="font-bold">BLOG, WIKI, ARTICLE</span> in one platform and gather all
            the valuable informative resources from innovative people across the world.
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4 mt-4 mr-4" onSubmit={handleSubmit}>
            <div>
              <Label value="YOUR USERNAME"></Label>
              <TextInput
                type="text"
                placeholder="Enter your username"
                id="username"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="YOUR EMAIL"></Label>
              <TextInput
                type="text"
                placeholder="Enter your email-id"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="YOUR PASSWORD"></Label>
              <TextInput
                type="password"
                placeholder="Enter your password"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
              Sign Up
            </Button>
          </form>
          <div className="flex-gap-2 text-sm mt-5">
            <span>Already have an account?</span>
            <Link to="/signin"> Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
