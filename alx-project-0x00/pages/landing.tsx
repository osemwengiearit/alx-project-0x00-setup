import Button from '@/components/Button';

export default function Landing() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Landing Page</h1>

      <div className="flex gap-4 mt-4">
        <Button title="Small" styles="text-sm rounded-sm" />
        <Button title="Medium" styles="text-md rounded-md" />
        <Button title="Large" styles="text-lg rounded-full" />
      </div>
    </div>
  );
}
