import DomToImage, {Options} from 'dom-to-image';

type ImageFormat = 'blob' | 'png' | 'jpeg' | 'svg';

export function convertDomToImage<T extends ImageFormat>(
  element: HTMLElement,
  format: T,
  options?: Options
): Promise<T extends 'blob' ? Blob : string>;

export function convertDomToImage(
  element: HTMLElement,
  format: ImageFormat = 'png',
  options?: Options
) {
  if (format === 'jpeg') {
    return DomToImage.toJpeg(element, options);
  }

  if (format === 'svg') {
    return DomToImage.toSvg(element, options);
  }

  if (format === 'blob') {
    return DomToImage.toBlob(element, options);
  }

  return DomToImage.toPng(element, options);
}
