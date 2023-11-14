// pages/index.tsx
import Navbar from './components/Navbar';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8">
        <h1 className="text-4xl font-bold">Welcome to Your Next.js App</h1>
      </div>
    </div>
  );
};

export default Home;