import { serverSideFunction } from '@/utils/server-utils';
import ImageSlider from '../components/ImageSlider';

export default function ServerRoutePage() {
  const result = serverSideFunction();
  return (
    <div>
      <h1>ServerRoutePage</h1>
      <p>{result}</p>

      <ImageSlider />
    </div>
  );
}
