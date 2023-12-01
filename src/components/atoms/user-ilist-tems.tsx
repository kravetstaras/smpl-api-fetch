import React, { useState } from 'react';
import { User } from '../../interfaces/user-interface';

export default function UserListItem({
  userData,
  index,
}: {
  userData: User;
  index: number;
}): JSX.Element {
  const [showDetails, setShowDetails] = useState(false);

  const {
    name,
    username,
    email,
    address: { street, suite, city, zipcode },
    phone,
    website,
    company: { name: companyName, catchPhrase, bs },
  } = userData;

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="p-4 bg-white w-full border-b-[2px] border-b-blue-300">
      <div className="cursor-pointer" onClick={handleToggleDetails}>
        <strong className="mr-[10px]">{index}.</strong>
        <strong>{name}</strong>
      </div>
      {showDetails && (
        <div className="mt-4">
          <p>Username: {username}</p>
          <p>Email: {email}</p>
          <p>
            Address: {street}, {suite}, {city}, {zipcode}
          </p>
          <p>Phone: {phone}</p>
          <p>Website: {website}</p>
          <p>Company: {companyName}</p>
          <p>Catchphrase: {catchPhrase}</p>
          <p>Business: {bs}</p>
        </div>
      )}
    </div>
  );
}
