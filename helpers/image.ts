const resolveImageSize = (
  src: string
): Promise<{ width: number; height: number }> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve({ width: img.width, height: img.height });
    img.onerror = reject;
    img.src = src;
  });
};

export const prefetchImageSize = async (src: string) => {
  try {
    const { width, height } = await resolveImageSize(src);
    console.log(`Image dimensions: ${width}x${height}`);
    return { width, height };
  } catch (error) {
    console.error("Error fetching image dimensions:", error);
    return { width: 0, height: 0 };
  }
};

export const getScaledImageSize = (
  maxSize: number,
  width: number,
  height: number
) => {
  if (width === 0 || height === 0) {
    return { width: 0, height: 0 };
  }
  const ratio = Math.min(maxSize / width, maxSize / height);
  return {
    width: Math.round(width * ratio),
    height: Math.round(height * ratio),
  };
};
