export const IMAGE_QUERY_REGEX = new RegExp("/image [0-9]", "g");
console.log(IMAGE_QUERY_REGEX.test("/image 4"));
