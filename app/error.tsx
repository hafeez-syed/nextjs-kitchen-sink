"use client";

export default function Error({ error, reset }: any) {
  return (
    <>
      <h1>Error: {error.message}</h1>
      <button onClick={reset}>Reset</button>
    </>
  );
}
