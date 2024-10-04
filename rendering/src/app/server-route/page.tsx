import { serverSideFunction } from '@/utils/server-utils';
import ImageSlider from '../components/ImageSlider';
import { clientSideFunction } from '@/utils/clients-utils';

export default function ServerRoutePage() {
  const result = serverSideFunction();
  const clientResult = clientSideFunction();
  return (
    <div>
      <h1>ServerRoutePage</h1>
      <p>{result}</p>

      <ImageSlider />
    </div>
  );
}
