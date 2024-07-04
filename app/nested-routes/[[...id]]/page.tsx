export default function NestedRoutes({ params }: any) {
  return (
    <>
      <h2>Nested [...id] (and catch-all [[...id]] ) Routes</h2>
      {params.id?.join(", ")}
    </>
  );
}
