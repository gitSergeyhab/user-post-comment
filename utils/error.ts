export const getErrorResponse = (errorMessage: string, status: number) => ({
  message: `Error fetching data: ${errorMessage}`,
  status,
});
