# HTTP Overview

## HTTP Headers
Headers are metadata used to convey additional information about the request or response.

### Types of Headers
- **Request Headers**: Sent from the client.
- **Response Headers**: Sent from the server.
- **Representation Headers**: Related to the encoding or compression of the data.
- **Payload Headers**: Contain the actual data.

### Common Headers
- **Accept**: Specifies the media types the client can process (e.g., `Accept: application/json`).
- **User-Agent**: Identifies the client software (e.g., `User-Agent: Postman`).
- **Authorization**: Contains credentials for authentication (e.g., `Authorization: Bearer <token>`).
- **Content-Type**: Indicates the media type of the resource being sent (e.g., `Content-Type: image/jpeg`).
- **Cookies**: Contains cookies from the client.
- **Cache-Control**: Directs caching mechanisms (e.g., `Cache-Control: no-cache`).

## HTTP Methods
- **GET**: Retrieve a resource.
- **HEAD**: Retrieve headers only (no message body).
- **OPTIONS**: Query the server for available operations.
- **TRACE**: Perform a diagnostic trace of the request.
- **DELETE**: Remove a resource.
- **PUT**: Replace a resource (full replacement).
- **PATCH**: Update a part of a resource.
- **POST**: Submit data to be processed.

## HTTP Status Codes

### 1xx (Informational)
- **100 Continue**: Initial part of a request has been received.
- **102 Processing**: Processing is ongoing.

### 2xx (Success)
- **200 OK**: The request succeeded.
- **201 Created**: A resource has been created.
- **202 Accepted**: The request has been accepted for processing.

### 3xx (Redirection)
- **307 Temporary Redirect**: The request should be repeated with another URL temporarily.
- **308 Permanent Redirect**: The resource has been permanently moved to a new URL.

### 4xx (Client Error)
- **400 Bad Request**: The request could not be understood by the server.
- **401 Unauthorized**: Authentication is required and has failed or has not been provided.
- **402 Payment Required**: Reserved for future use.
- **404 Not Found**: The requested resource could not be found.

### 5xx (Server Error)
- **500 Internal Server Error**: The server encountered an error and could not complete the request.
- **504 Gateway Timeout**: The server did not receive a timely response from an upstream server.
