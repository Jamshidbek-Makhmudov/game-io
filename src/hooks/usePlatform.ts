import usePlatforms from './usePlatforms';

const usePlatformHook = (id?: number) => {
  const { data: platforms } = usePlatforms();
  return platforms?.results.find((p) => p.id === id);
};

export default usePlatformHook;
