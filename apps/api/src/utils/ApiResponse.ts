export class ApiResponse<T> {
  private statusCode: number;
  private message: string;
  private data: T;
  constructor(statusCode: number, message: string, data: T) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }
}
