import { serverSideFunction } from '@/utils/server-utils';

export default function ServerRoutePage() {
  const result = serverSideFunction();
  return (
    <div>
      <h1>ServerRoutePage</h1>
      <p>{result}</p>
    </div>
  );
}
