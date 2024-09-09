import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Header = () => {
  return (
    <div className="px-[10%] py-16 grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-b from-purple-700 to-pink-500">
      <div className="text-white p-2">
        <h1 className="font-extrabold text-5xl">
          (Project Name) unites your tasks, team members, and resources in one
          place for seamless collaboration and project management.
        </h1>
        <p className="text-lg mt-3 leading-10">
          Keep all your work organized in one central location, no matter where
          your team is located.
        </p>
        <h3 className="text-xl font-semibold mt-5">
          With (Project Name) free plan, you receive:
        </h3>
        <ul className="my-3 leading-10">
          <li>Unlimited cards for task organization.</li>
          <li>Up to 10 boards per workspace for project management.</li>
          <li>Unlimited activity history to track updates.</li>
          <li>Custom backgrounds and stickers to customize your boards.</li>
        </ul>
        <div className="flex w-full max-w-sm items-center space-x-2 mt-3">
          <Input type="email" placeholder="email" />
          <Button type="submit" className="bg-blue-600 text-white">
            Sign up -it&apos;s free
          </Button>
        </div>
      </div>
      <div>
        <img src="/header_img.jpg" alt="" />
      </div>
    </div>
  );
};

export default Header;
