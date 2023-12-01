import React, { useState } from 'react';
import { User } from '../../interfaces/user-interface';

export default function UserListItem({
  userData,
}: {
  userData: User;
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
    <div className="mb-4 p-4 bg-white w-full">
      <div className="cursor-pointer" onClick={handleToggleDetails}>
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
