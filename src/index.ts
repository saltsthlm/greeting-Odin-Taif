export function greet(inputName: string): { message: string } {
  //   const namePattern = /^[a-zA-Z\s'-]+$/;
  //   if (inputName.length === 0 || !namePattern.test(inputName)) {
  //     return { error: "Invalid name provided." };
  //   }
  return { message: `Welcome, ${inputName}!` };
}
