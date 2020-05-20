export function handleMessageNOtif(data) {
  const { message, nickname } = data;
  console.log(`${nickname}: ${message.message}`);
  //   console.log(`somebody said ${message}`);
}
