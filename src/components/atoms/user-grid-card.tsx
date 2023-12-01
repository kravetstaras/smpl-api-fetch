import React from 'react';
import { User } from '../../interfaces/user-interface';

export default function UserGridCard({
  userData,
}: {
  userData: User;
}): JSX.Element {
  const {
    name,
    username,
    email,
    address: {
      street,
      suite,
      city,
      zipcode,
      geo: { lat, lng },
    },
    phone,
    website,
    company: { name: companyName, catchPhrase, bs },
  } = userData;
  return (
    <li className="rounded overflow-hidden shadow-lg bg-white w-full h-full">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
          <strong>Username:</strong> {username}
          <br />
          <strong>Email:</strong> {email}
          <br />
          <strong>Address:</strong> {street}, {suite}, {city}, {zipcode}
          <br />
          <strong>Geo:</strong> Lat: {lat}, Lng: {lng}
          <br />
          <strong>Phone:</strong> {phone}
          <br />
          <strong>Website:</strong> {website}
          <br />
          <strong>Company:</strong> {companyName}
          <br />
          <strong>Catchphrase:</strong> {catchPhrase}
          <br />
          <strong>BS:</strong> {bs}
          <br />
        </p>
      </div>
    </li>
  );
}
