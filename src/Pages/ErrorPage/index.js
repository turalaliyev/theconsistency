import { Typography } from '@material-tailwind/react';
import React from 'react';

export default function ErrorPage() {
  return (
    <div
      id="error-page"
      className="flex w-full flex-col justify-center items-center mt-8"
    >
      <Typography variant="h2">Oops!</Typography>
      <Typography variant="h4">Sorry, this page is not found...</Typography>
    </div>
  );
}
