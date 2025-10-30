import React, { useState, useEffect } from 'react';
import LoadingSpinner from '../../Component/LoadingSpeaner/LoadingSpeaner';

const MySkills = () => {
  const [loading, setLoading] = useState(true);

  // Background image preloader
  useEffect(() => {
    const img = new Image();
    img.src = 'https://i.ibb.co/zHbJgGmw/Group-102.png';
    img.onload = () => setLoading(false);
  }, []);

  if (loading) return <LoadingSpinner />; // Loader দেখাবে যতক্ষণ background load হয়নি

  return (
    <section
      className="h-screen py-20 p-4 flex flex-col items-center bg-cover bg-center transition-all duration-700"
      style={{ backgroundImage: `url('https://i.ibb.co/zHbJgGmw/Group-102.png')` }}
    >
      {/* এখানে তুমি তোমার skills content বসাতে পারো */}
    </section>
  );
};

export default MySkills;
