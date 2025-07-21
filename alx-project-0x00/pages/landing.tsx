import React from 'react';
import Card from '@/components/Card';
import Button from '@/components/Button';

const Landing: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-extralight">Landing Page</h1>
      <Card />
      <Card />

      <div className="mt-6 space-y-2">
        <h2 className="text-xl font-semibold">Buttons:</h2>

        <div className="flex gap-3 flex-wrap">
          <Button title="Small - rounded-sm" className="text-sm rounded-sm" />
          <Button
            title="Medium - rounded-md"
            className="text-base rounded-md"
          />
          <Button
            title="Large - rounded-full"
            className="text-lg rounded-full px-6 py-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
