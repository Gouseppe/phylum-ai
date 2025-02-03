export function getImageUrl(name: string, format: string = "png") {
  // note that this does not include files in subdirectories
  return new URL(`../assets/img/${name}.${format}`, import.meta.url).href;
}
